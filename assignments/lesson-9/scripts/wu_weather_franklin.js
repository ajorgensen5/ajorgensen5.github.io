////populate City Pages with data from Underground Weather site
var franklinObject = new XMLHttpRequest();

franklinObject.open('GET', 'http://api.wunderground.com/api/b427f9b05290ebaf/conditions/forecast10day/q/MN/Franklin.json', true);

franklinObject.send();

franklinObject.onload = function () {

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
        
//        franklinTemp.open('GET', 'http://api.wunderground.com/api/b427f9b05290ebaf/forecast/q/MN/Franklin.json', true);
//
//        franklinTemp.send();
//
//        franklinTemp.onload = function () {
//
//            var temperatureInfo = JSON.parse(franklinTemp.responseText);
//            var forecastday = [];
//            console.log(temperatureInfo);
//            
        
        }
                        
//            document.getElementById('currentTemp').innerHTML = gweatherInfo.current_observation.temp_f;
                        
//            document.getElementById('txtforecast').innerHTML = gweatherInfo.forecast.txt_forecast.forecastday[0].fcttext;
            
//            document.getElementById('highTemp').innerHTML = temperatureInfo.forecast.simpleforecast.forcastday["0"].high.fahrenheit;
            
//  
//            document.getElementById('lowT').innerHTML = temperatureInfo.forecast.simpleforecast.forcastday['0'].low.fahrenheit;
//
//        }
        
        
