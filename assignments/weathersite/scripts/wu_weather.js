var franklinObject = new XMLHttpRequest();

franklinObject.open('GET','http://api.wunderground.com/api/b427f9b05290ebaf/forecast/conditions/q/MN/Franklin.json', true);

franklinObject.send();
console.log("hello Aimee");
franklinObject.onload = function () {
    var response=franklinObject.response;
    console.log(response);
    
    var currentTemp=response.current_observation.temp_f;
    console.log(currentTemp);
}
//
//        var fweatherInfo = JSON.parse(franklinObject.responseText);
//        console.log(fweatherInfo);
//
//        document.getElementById('weather').innerHTML = fweatherInfo.current_observation.weather;
//
//        document.getElementById('currentTemp').innerHTML = fweatherInfo.current_observation.temp_f;
//
//        document.getElementById('windspeed').innerHTML = fweatherInfo.current_observation.wind_mph;
//
//        document.getElementById('w_url').src = fweatherInfo.current_observation.icon_url;
//    
//    var greenvilleObject = new XMLHttpRequest();
//
//greenvilleObject.open('GET','http://api.wunderground.com/api/b427f9b05290ebaf/forecast/conditions/q/MN/Greenville.json', true);
//
//greenvilleObject.send();
//
//greenvilleObject.onload = function () {
//
//        var gweatherInfo = JSON.parse(greenvilleObject.responseText);
//        console.log(gweatherInfo);
//
//        document.getElementById('weather').innerHTML = gweatherInfo.current_observation.weather;
//
//        document.getElementById('currentTemp').innerHTML = gweatherInfo.current_observation.temp_f;
//
//        document.getElementById('windspeed').innerHTML = gweatherInfo.current_observation.wind_mph;
//
//        document.getElementById('w_url').src = gweatherInfo.current_observation.icon_url;
//
//        document.getElementById('txtforecast').innerHTML = gweatherInfo.forecast.txt_forecast.forecastday[0].fcttext;
//}
       
