function computeNum() {
	
    
    
    //where f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit, and s is the wind speed in miles per hour.
   var t = 
    
    var f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16 
    
	var textInput = get("aNum").value;
	if (textInput.length < 3 || isNaN(textInput)) return; // Validation return nothing
	
	// Processing - multiply by the a random number taken to the 3rd power
	var theNumber = parseInt(textInput); // OK - parse string to number
	var theValue = theNumber * Math.pow(Math.random(), 3);
	
	// Output - output to the div and round the number value to two decimal places
	get("output").innerHTML = "The value is <strong>" + theValue.toFixed(2) + "</strong>!";
}

function get(e) { return document.getElementById(e); }

