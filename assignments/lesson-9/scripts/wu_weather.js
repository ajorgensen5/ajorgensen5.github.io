var franklinObject = new XMLHttpRequest();

franklinObject.open('GET','http://api.wunderground.com/api/b427f9b05290ebaf/forecast/conditions/q/MN/Franklin.json', true);

franklinObject.send();

franklinObject.onload = function () {

        var fweatherInfo = JSON.parse(franklinObject.responseText);
        console.log(fweatherInfo);

        document.getElementById('weather').innerHTML = fweatherInfo.current_observation.weather;

        document.getElementById('currentTemp').innerHTML = fweatherInfo.current_observation.temp_f;

        document.getElementById('windspeed').innerHTML = fweatherInfo.current_observation.wind_mph;

        document.getElementById('w_url').src = fweatherInfo.current_observation.icon_url;

        document.getElementById('txtForecast').innerHTML = fWeatherInfo.current_observation.forecast.txt_forecast.forecastday["0"].fcttext;

}
       