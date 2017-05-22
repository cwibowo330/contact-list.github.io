(function (){
	function changeIntoArr(arr) {
		var newArr = [];
		for (var a = 0; a < arr.length; a++) {
			newArr.push(arr[a]);
		}
		return newArr;
	}

	var allNames = changeIntoArr(document.querySelectorAll('tr'))
	var selectItem = document.querySelector('#preference');
	var emailInfos = changeIntoArr(document.querySelectorAll('span.email-info'));
	var phoneInfos = changeIntoArr(document.querySelectorAll('span.phone-info'));
	// checks for IE
	if(navigator.appVersion.indexOf("MSIE 7.")!=-1 || navigator.appVersion.indexOf("MSIE 8.") != -1 || navigator.appVersion.indexOf("MSIE 9.") != -1) {
		// highlights selected name and displays info
		for(var i = 0; i < allNames.length; i++) {
			allNames[i].attachEvent('onmouseenter', function(e){
				e.srcElement.className = 'highlight';
			});
			allNames[i].attachEvent('onmouseenter', function(e){
				e.srcElement.className = '';
			});
		}

		// select switches between email or phone number
		selectItem.attachEvent('onchange', function(){
			if (selectItem.value == 'email') {
				for (var e = 0; e < emailInfos.length; e++) {
					phoneInfos[e].className = 'phone-info';
					emailInfos[e].className = 'email-info active';
				}
			} else if (selectItem.value == 'phone'){
				for (var p = 0; p < phoneInfos.length; p++) {
					emailInfos[p].className = 'email-info';
					phoneInfos[p].className = 'phone-info active';
				}
			}
		})
	} else {
		// highlights selected name and displays info
		for(var i = 0; i < allNames.length; i++) {
			allNames[i].addEventListener('mouseenter', function(e){
				e.target.classList.add('highlight');
			});
			allNames[i].addEventListener('mouseleave', function(e){
				e.target.classList.remove('highlight');
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