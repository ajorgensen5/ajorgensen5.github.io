var weatherObject = new XMLHttpRequest();

weatherObject.open('GET',
    'http://api.wunderground.com/api/b427f9b05290ebaf/conditions/q/MN/Franklin.json', true);

weatherObject.send();

weatherObject.onload = function () {

    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('weather').innerHTML = weatherInfo.current_observation.weather;

    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;

    document.getElementById('windspeed').innerHTML = weatherInfo.current_observation.wind_mph;

    document.getElementById('w_url').src = weatherInfo.current_observation.icon_url;
    
    document.getElementById('w_description').innerHTML=weatherInfo.current_weather;  

}

var weatherObject = new XMLHttpRequest();

weatherObject.open('GET',
    'http://api.wunderground.com/api/b427f9b05290ebaf/conditions/q/MN/Greenville.json', true);

weatherObject.send();

weatherObject.onload = function () {

    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('weather').innerHTML = weatherInfo.current_observation.weather;

    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;

    document.getElementById('windspeed').innerHTML = weatherInfo.current_observation.wind_mph;

    document.getElementById('w_url').src = weatherInfo.current_observation.icon_url;
    
    document.getElementById('w_description').innerHTML=weatherInfo.current_weather;  

    var weatherObject = new XMLHttpRequest();

weatherObject.open('GET',
    'http://api.wunderground.com/api/b427f9b05290ebaf/conditions/q/MN/Springfield.json', true);

weatherObject.send();

weatherObject.onload = function () {

    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('weather').innerHTML = weatherInfo.current_observation.weather;

    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;

    document.getElementById('windspeed').innerHTML = weatherInfo.current_observation.wind_mph;

    document.getElementById('w_url').src = weatherInfo.current_observation.icon_url;
    
    document.getElementById('w_description').innerHTML=weatherInfo.current_weather;  

