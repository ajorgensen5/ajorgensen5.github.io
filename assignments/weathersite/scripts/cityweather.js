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

                            if (cities[i].name == "Franklin")
                                myDiv.className = "citiesDiv1";
                            else if (cities[i].name == "Greenville")
                                myDiv.className = "citiesDiv2";
                            else if (cities[i].name == "Springfield")
                                myDiv.className = "citiesDiv3";

                            var myDiv1 = document.createElement('div');
                            var myDiv2 = document.createElement('div');
                            var myDiv3 = document.createElement('div');
                            var myH2 = document.createElement('h2');
                            var myImg = document.createElement('img');
                            var myPara1 = document.createElement('p');
                            var myPara2 = document.createElement('p');
                            var myPara3 = document.createElement('p');
                            var myPara4 = document.createElement('p');

                            if (cities[i].name == "Franklin")
                                myImg.setAttribute('src', 'images/franklin bridge.jpeg');
                            if (cities[i].name == "Greenville")
                                myImg.setAttribute('src', 'images/farming.jpeg');
                            if (cities[i].name == "Springfield")
                                myImg.setAttribute('src', 'images/forest-fog-sunny-nature-615348 copy.jpg');

                            myH2.textContent = cities[i].name;
                            myPara1.textContent = 'Motto: ' + cities[i].motto;
                            myPara2.textContent = 'Year Founded: ' + cities[i].yearFounded;
                            myPara3.textContent = 'Current Population:' + cities[i].currentPopulation;
                            myPara4.textContent = 'Average Rain Fall:' + cities[i].averageRainFall;

                            myDiv1.appendChild(myImg);
                            myDiv2.appendChild(myH2);
                            myDiv2.appendChild(myPara1);
                            myDiv2.appendChild(myPara2);
                            myDiv2.appendChild(myPara3);
                            myDiv2.appendChild(myPara4);
                            myDiv.appendChild(myDiv1);
                            myDiv.appendChild(myDiv2);
                            section.appendChild(myDiv3);
                        }
                    }
                }