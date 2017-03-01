// ------- Clock module -------
(function clock() {
	var getTime = function() {
		var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();

		//This adds a '0' before the hours, if the hours are less than 10
		if (hours < 10) {
			hours = "0" + hours;
		} else {
			hours = hours;
		}

		//This adds a '0' before the minutes, if the minutes are less than 10
		if (minutes < 10) {
			minutes = "0" + minutes;
		} else {
			minutes = minutes;
		}

		//This adds a '0' before the seconds, if the seconds are less than 10
		if (seconds<10) {
			seconds = "0" + seconds;
		} else {
			seconds = seconds;
		}

		//This displays the current time in the #clock div element
		document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds;
	};

	//This updates the time once every 1000ms
	setInterval(getTime,1000);
})();

// ------- Dropdown menu module -------
(function dropDown() {
	//Sets initial state (collapsed)
	var state = "collapsed";
	//Variables for the dropdown and the controller
	var dropDown =  document.getElementById('dropdown');
	var controller = document.getElementById('controller');

	var buttons = document.querySelectorAll('#dropdown li');

	/*
	Expands and collapses the #dropdown menu when clicking the #controller button
	Updates the state of the #dropdown (expanded or collapsed)
	*/
	var menuControl = function() {
		if (state === "collapsed") {
			dropDown.style = "display: block;";
			controller.style = "color: #c0f954;";
			state = "expanded";
		} else if (state === "expanded") {
			dropDown.style = "display: none;";
			controller.style = "color: white;";
			state = "collapsed";
		}
	};

	//Sets an event for the #controller button
	controller.addEventListener('click',menuControl);

	//Sets events for the navbar buttons
	for (var i = 0; i < buttons.length; i += 1) {
		buttons[i].addEventListener('click',menuControl);
	}
})();

// ------- Image preview module -------
(function imgPreview() {
	//Variables for the images and the #preview
	var images = document.querySelectorAll('#carousel img');
	var preview = document.getElementById('preview');



	//Displays and enlarges the select small image into the preview element
	var previewImg = function() {
		var currentImg = document.getElementById(this.id);
		var currentSrc = currentImg.getAttribute('src');
		preview.innerHTML = '<img src=' + currentSrc + '>' + '<p> Click on the image to close it </p>';
		preview.scrollIntoView();
		preview.firstElementChild.addEventListener('click', hidePreview);
	};

	//Hides the preview element
	var hidePreview = function() {
		var currentImg = document.getElementById(this.id);
		preview.innerHTML = null;
		document.getElementById('header').scrollIntoView();
	};

	/*
	Initial randomized rotation and adding an event listener for the small image elements
	*/
	for (i = 0 ; i < images.length ; i++) {
		images[i].addEventListener('click',previewImg);
		images[i].style.transform = 'rotate(' + String(Math.floor(Math.random()*40)-20) + 'deg)';
	}
})();
