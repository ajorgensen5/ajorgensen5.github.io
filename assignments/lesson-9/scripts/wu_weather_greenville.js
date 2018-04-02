////populate City Pages with data from Underground Weather site
var greenvilleWeatherdata = new XMLHttpRequest();

greenvilleWeatherdata.open('GET', 'http://api.wunderground.com/api/b427f9b05290ebaf/conditions/forecast10day/q/SC/Greenville.json', true);

greenvilleWeatherdata.send();

//executes when the response loads

greenvilleWeatherdata.onload = function () {

        var weatherInfo = JSON.parse(franklinObject.responseText);
        console.log(weatherInfo);
    
        
        document.getElementById('nameCity').innerHTML = weatherInfo.current_observation.display_location.city;
    
        document.getElementById('wUrl').src = weatherInfo.current_observation.icon_url;

        document.getElementById('weatherString').innerHTML = weatherInfo.current_observation.weather;
           
//        document.getElementById('precip').innerHTML = weatherInfo.current_observation.precip_1hr_in;

        document.getElementById('windSpeed').innerHTML = weatherInfo.current_observation.wind_mph;
    
        console.log(weatherInfo.current_observation.wind_mph);
    
        document.getElementById('windChill').innerHTML = weatherInfo.current_observation.windchill_f;

        document.getElementById('dayone').innerHTML=weatherInfo.forecast.simpleforecast.forecastday[0].high.fahrenheit;
        console.log(weatherInfo.forecast.simpleforecast.forecastday[0].high.fahrenheit);