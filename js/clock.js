(function clock() {
	var getTime = function() {
		var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();

		if (minutes<10) {
			minutes = "0" + minutes;
		} else {
			minutes = minutes;
		}

		if (seconds<10) {
			seconds = "0" + seconds;
		} else {
			seconds = seconds;
		}

		var time = hours + ":" + minutes + ":" + seconds;

		document.getElementById('clock').innerHTML = time;
	};

	setInterval(getTime,51);
})();
