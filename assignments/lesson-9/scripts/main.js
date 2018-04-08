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

    document.getElementById('wUrl').src = weatherInfo.current_observation.icon_url;

} 

function move() {
    var elem = document.getElementById("myBar"); 
    var width = 5;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}

