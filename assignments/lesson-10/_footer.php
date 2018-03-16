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
