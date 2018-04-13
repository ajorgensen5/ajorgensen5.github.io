/*function toggleHam() {
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

}*/
function toggleNavMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
 

