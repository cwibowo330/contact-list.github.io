(function (){
	function changeIntoArr(arr) {
		var newArr = [];
		for (var a = 0; a < arr.length; a++) {
			newArr.push(arr[a]);
		}
		return newArr;
	}
	function grabParent(e){
		console.log(e);
		return e.target.parentNode;
	}
	function grabParentIE(e){
		return e.srcElement.parentNode;
	}

	var allNames = changeIntoArr(document.querySelectorAll('td.name'))
	var selectItem = document.querySelector('#preference');
	var emailInfos = changeIntoArr(document.querySelectorAll('span.email-info'));
	var phoneInfos = changeIntoArr(document.querySelectorAll('span.phone-info'));

	if(navigator.appVersion.indexOf("MSIE 7.")!=-1 || navigator.appVersion.indexOf("MSIE 8.") != -1 || navigator.appVersion.indexOf("MSIE 9.") != -1) {
		// highlights selected name and displays info
		for(var i = 0; i < allNames.length; i++) {
			var parentItem;
			allNames[i].attachEvent('onmouseenter', function(e){
				parentItem = grabParentIE(e);
				console.log(parentItem);
				parentItem.className += 'highlight';
			});
			allNames[i].attachEvent('onmouseenter', function(e){
				parentItem.className = '';
			});
		}

		// select switches between email or phone number
		selectItem.attachEvent('onchange', function(){
			if (selectItem.value == 'email') {
				for (var e = 0; e < emailInfos.length; e++) {
					phoneInfos[e].className = 'phone-info';
					emailInfos[e].className += 'active';
				}
			} else if (selectItem.value == 'phone'){
				for (var p = 0; p < phoneInfos.length; p++) {
					emailInfos[p].className = 'email-info';
					phoneInfos[p].className += 'active';
				}
			}
		})
	} else {
		// highlights selected name and displays info
		for(var i = 0; i < allNames.length; i++) {
			var parentItem;
			allNames[i].addEventListener('mouseenter', function(e){
				parentItem = grabParent(e);
				parentItem.classList.add('highlight');
			});
			allNames[i].addEventListener('mouseleave', function(e){
				parentItem.classList.remove('highlight');
			});
		}
		
		// select switches between email or phone number
		selectItem.addEventListener('change', function(){
			if (selectItem.value == 'email') {
				for (var e = 0; e < emailInfos.length; e++) {
					phoneInfos[e].classList.remove('active');
					emailInfos[e].classList.add('active');
				}
			} else if (selectItem.value == 'phone'){
				for (var p = 0; p < phoneInfos.length; p++) {
					emailInfos[p].classList.remove('active');
					phoneInfos[p].classList.add('active');
				}
			}
		})
	}

	
	
	
})();