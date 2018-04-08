var urlString = document.location.href;
var urlArray = urlString.splity('/');
var pageHREF = urlArray[urlArray.length-1];

if (pageHREF !=="") {
    var menu=document.querySelectorAll('ul#mainmenu li a');
    var i;
    
    for(i=0; i<menu.lenth; i++) {
        var currentURL = (menu[i].getAttribute("href"));
        menu[i].parentNode.className = "";
        if (currentURL===pageHREF){
            menu[i].parentNode.className = "active";
        }
    }
}