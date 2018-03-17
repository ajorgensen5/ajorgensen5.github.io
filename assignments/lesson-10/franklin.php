<!doctype html>
<html lang="en-us">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CIT Assignment 8 - Build a Form - Aimee Jorgensen</title>
    <meta name="author" content="Aimee Jorgensen">
    <meta name="description" content="CIT 230 Assignment 8 - Aimee Jorgensen - Web Frontend Development at Brigham Young University - Idaho.">
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
<ul id="mainmenu">
        <ul id="nav" class="hide-nav">

            <li><a href="home.html">Home</a></li>
            <li class="active">
                <a href="franklin.html">Franklin</a></li>
            <li><a href="greenville.html">Greenville</a></li>
            <li><a href="springville.html">Springfield</a></li>
            <li><a href="stormcenter.html">Storm Center</a></li>
            <li><a href="gallery.html">Gallery</a></li>
        </ul>
    </ul>
    </nav>

    <main>

        <figure class="myphoto">
            <img src="images/franklin-1028.jpg" alt="franklin image" sizes="50vw" srcset="images/franklin-200.jpg 200vw,
                    images/franklin-500.jpg 500vw,
                    images/franklin-800.jpg 800vw,
                    images/franklin-1200.jpg 1028vw">


        </figure>
        <h2>Franklin, IL</h2>
        <section>
            <h3 class=weathersummary><strong>Weather Summary</strong></h3>
            <div class="highlow">
                <p>High: <span id="high">24</span> &#8457;</p>
                <span id="currenthigh"></span>
                <p>Low: <span id="low">15</span> &#8457;</p>
                <p class="windchill">Windchill: <span id="outputWindchill"></span></p>
                &#8457;
            </div>
            <picture>
                <img src="images/sparkly-snowflake-clipart-1.jpg" alt="" width="" height="">
            </picture>
            <div class="current">
                <strong>Snow</strong>

            </div>
            <div class="conditions">
                <p>Precipitation: 20%</p>
                <p>Wind Speed<span id="wind">5</span> mph SW</p>
            </div>
        </section>

        <section class="forecast">
            <h3>10 Day Forecast</h3>
            <table>
                <thead>
                    <tr>
                        <th>Day 1</th>
                        <th>Day 2</th>
                        <th>Day 3</th>
                        <th>Day 4</th>
                        <th>Day 5</th>
                        <th>Day 6</th>
                        <th>Day 7</th>
                        <th>Day 8</th>
                        <th>Day 9</th>
                        <th>Day 10</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>20&deg;F</td>
                        <td>24&deg;F</td>
                        <td>19&deg;F</td>
                        <td>21&deg;F</td>
                        <td>32&deg;F</td>
                        <td>35&deg;F</td>
                        <td>40&deg;F</td>
                        <td>37&deg;F</td>
                        <td>23&deg;F</td>
                        <td>20&deg;F</td>
                    </tr>
                </tbody>
            </table>
            
        </section>



        <article id=town-article>

            <h3 class="prepare">Franklin Prepares for More Snow</h3>

            <figure class="moresnow">
                <img src="images/pine-tree-with-snow-original.jpg" alt="pine tree with snow" sizes="50vw" srcset="images/pine-tree-with-snow-200.jpg 200vw,
                    images/pine-tree-with-snow-500.jpg 500vw,
                    images/pine-tree-with-snow-800.jpg 800vw">

                <p class="snow">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu gravida quam. Fusce fermentum, urna non posuere tristique, mi nisl porttitor tellus, sed accumsan elit dolor vel ipsum. Nulla vehicula lorem sit amet mi sagittis accumsan. Donec et auctor metus. In felis ante, dignissim sit amet facilisis in, ornare a nibh. Praesent a metus quis ex tempor suscipit nec et odio. Vestibulum auctor facilisis erat. Duis non tortor vulputate, euismod quam sit amet, convallis eros. Phasellus nec dignissim sapien. Vestibulum vitae augue a risus accumsan lobortis.
                    <br><br> Nulla vehicula lorem sit amet mi sagittis accumsan. Donec et auctor metus. In felis ante, dignissim sit amet facilisis in, ornare a nibh. Praesent a metus quis ex tempor suscipit nec et odio. Vestibulum auctor facilisis erat. Duis non tortor vulputate, euismod quam sit amet, convallis eros. Phasellus nec dignissim sapien. Vestibulum vitae augue a risus accumsan lobortis.
                    <br><br> Nulla vehicula lorem sit amet mi sagittis accumsan. Donec et auctor metus. In felis ante, dignissim sit amet facilisis in, ornare a nibh. Praesent a metus quis ex tempor suscipit nec et odio. Vestibulum auctor facilisis erat. Duis non tortor vulputate, euismod quam sit amet, convallis eros. Phasellus nec dignissim sapien. Vestibulum vitae augue a risus accumsan lobortis. Nulla vehicula lorem sit amet mi sagittis accumsan. Donec et auctor metus. In felis ante, dignissim sit amet facilisis in, ornare a nibh. Praesent a metus quis ex tempor suscipit nec et odio. Vestibulum auctor facilisis erat. Duis non tortor vulputate, euismod quam sit amet, convallis eros. Phasellus nec dignissim sapien. Vestibulum vitae augue a risus accumsan lobortis.</p>
            </figure>

        </article>

    </main>

    <footer>
        <aside>
            <p>25 Main St. Franklin, IL &nbsp; 83454 &nbsp; 809.876.7676</p>
        </aside>
        <p class="footer-bar">&copy;2018 All Rights Reserved &nbsp;| &nbsp; <em><strong>SmartCast Weather </strong></em> &nbsp;| &nbsp;
            <span id="currentdate"></span>
        </p>
        <script>
    //remember to add an ID of ?mainmenu" to the nav ul"
    var urlString = document.location.href;
    varurlArray = urlString.split('/');
    var pageHREF=urlArray[urlArray.length-1];
    
    if (pageHREF !=="") {
        var menu = document.querySelectorAll('ul#mainmenu li a');
        var i;
        //loop through all the menu items in the navigation
        for(i=0; i<menu.length; i++) {
            var currentURL=(menu[i].getAttribute("href"));
            menu[i].parentNode.className=""; //turn off highlighting by default
            if (currentURL===pageHREF) {
                menu[i]parentNode.className="active";
            }//end if
        }//end of the search for a match
            }//end of if !==

    </script>

    </footer>
    <script src="scripts/hamburger.js"></script>
    <script src="scripts/currentdate.js"></script>
    <script src="scripts/windchill.js"></script>


</body>

</html>