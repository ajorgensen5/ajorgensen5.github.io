//javascript Document

var weatherObject = new XMLHttpRequest();

weatherObject.open('GET',
    'http://api.wunderground.com/api/b427f9b05290ebaf/conditions/q/MN/Franklin.json', true);

weatherObject.send();

weatherObject.onload = function () {

    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;

    document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;

} // end of onload
