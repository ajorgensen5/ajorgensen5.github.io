



//function calcWc {
var h= document.getElementById("high").innerHTML;
var l= document.getElementById("low").innerHTML;
var w= document.getElementById("wind").innerHTML;
var h= parseInt(h);
var l= parseInt(l);
var t = (h+l)/2;
w = Math.pow(w,0.16);

var f = 35.74 + 0.6215 * t - 35.75 * w + 0.4275 * t * w;

var wc = f.toFixed(2);


document.getElementById("outputWindchill").innerHTML = wc;
//    }
//window.alert(wc);

