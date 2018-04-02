function toggleHam() {
    var x = document.getElementById("nav");
    if (x.classList == "show-nav") {
        x.classList.remove("show-nav");
        x.classList.add("hide-nav");
    }
    
    else if (x.classList=="hide-nav")
    {
       x.classList.remove("hide-nav");
        x.classList.add("show-nav"); 
    }

}

 //remember to add an ID of ?mainmenu" to the nav ul"
            var urlString = document.location.href;
            varurlArray = urlString.split('/');
            var pageHREF = urlArray[urlArray.length - 1];

            if (pageHREF !== "") {
                var menu = document.querySelectorAll('ul#mainmenu li a');
                var i;
                //loop through all the menu items in the navigation
                for (i = 0; i < menu.length; i++) {
                    var currentURL = (menu[i].getAttribute("href"));
                    menu[i].parentNode.className = ""; //turn off highlighting by default
                    if (currentURL === pageHREF) {
                        menu[i] parentNode.className = "active";
                    } //end if
                } //end of the search for a match
            } //end of if !==



