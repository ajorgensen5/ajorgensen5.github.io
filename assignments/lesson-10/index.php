<!doctype html>
<html lang="en-us">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CIT Assignment 9 - Weather Site Home Page - Aimee Jorgensen</title>
    <meta name="author" content="Aimee Jorgensen">
    <meta name="description" content="">
    <!-- external style references in the proper cascading order -->

    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto|Roboto+Condensed" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css?family=Oswald|Playfair+Display" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css?family=Bad+Script" rel="stylesheet">

    <!-- Google API font reference -->
    <link href="styles/normalize.css" rel="stylesheet">
    <!-- normalize useragent/browser defaults -->
    <link href="styles/main.css" rel="stylesheet">
    <!-- default styles - small/phone views -->
    <link href="styles/medium.css" rel="stylesheet">
    <!-- medium/tablet views -->
    <link href="styles/large.css" rel="stylesheet">
    <!-- large/wide/desktop views -->
</head>

<body>

    <header>
        <div class="title">
            <img src="images/Weather_SunAbstract.png" alt="The site logo" width="" height="">
            <h1>SmartCast Weather</h1>
        </div>
        <div class="subheading">Smart Forecasts for a Smart Life</div>
    </header>

    <!-- site navigation use placeholder references -->

    <button class="hamburger" onclick="toggleHam()">&#9776;</button>

    <nav>

        <ul id="nav" class="hide-nav">

            <li><a href="home.html">Home</a></li>
            <li class="active">
                <a href="franklin.html">Franklin</a></li>
            <li><a href="greenville.html">Greenville</a></li>
            <li><a href="springville.html">Springfield</a></li>
            <li><a href="stormcenter.html">Storm Center</a></li>
            <li><a href="gallery.html">Gallery</a></li>
        </ul>
    </nav>
<main>
    <section>
        <!-- JSON -->
    

    <script>
        var section = document.querySelector('section');

        //store the URL of the JSON we want to retrieve in a variable

        var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

        //XMLHttpRequest or XHR: This is a very useful JavaScript object that allows us to make network requests to retrieve resources from a server via JavaScript.  Use the "new" keyword

        var request = new XMLHttpRequest();

        //open a new request using the HTTP method 'GET' to retrieve simple data. the URL to make the request to.// The URL of the JSON file

        request.open('GET', requestURL);

        // set the response type to JSON, so that XHR knows that the server will be returning JSON and that it needs to be converted into a javascript object.
        request.responseType = 'json';

        //send the request with send method.

        request.send();

        //wait for the response to return from the server, then dealing with it.

        request.onload = function() {
            //onload is an event handler. When the response has successfully returned it will  run.

            //store the request in a variable called superHeroes; it will now contain the JavaScript object based on the JSON

            var w = request.response;

            //passing that object to two function calls

            weatherInfo(w);
            //header data

        }

        //creating the weather information cards.  It is an array with multiple objects and use a for loop.

        function weatherInfo(jsonObj) {
            var cities = jsonObj['towns'];
            for (var i = 0; i < cities.length; i++) {
                if (cities[i].name != "Placerton") {
                    var myDiv = document.createElement('div');
                    var myH2 = document.createElement('h2');
                    var myPara1 = document.createElement('p');
                    var myPara2 = document.createElement('p');
                    var myPara3 = document.createElement('p');
                    var myPara4 = document.createElement('p');

                    myH2.textContent = cities[i].name;
                    myPara1.textContent = 'Motto: ' + cities[i].motto;
                    myPara2.textContent = 'Year Founded: ' + cities[i].yearFounded;
                    myPara3.textContent = 'Current Population:' + cities[i].currentPopulation;
                    myPara4.textContent = 'Average Rain Fall:' + cities[i].averageRainFall;

                    myDiv.appendChild(myH2);
                    myDiv.appendChild(myPara1);
                    myDiv.appendChild(myPara2);
                    myDiv.appendChild(myPara3);
                    myDiv.appendChild(myPara4);
                    section.appendChild(myDiv);
                }
            }
        }
    </script>
        </section>
    </main>
</body>

</html>


