var gotoWeather = function(position) {
	window.location.href = 'http://forecast.weather.gov/MapClick.php?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude;
};

if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(gotoWeather);
} else {
	alert('Browser not supported');
}