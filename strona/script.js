function output(){
	var x = document.forms["myForm"]["fname"].value;
	var y = (document.getElementById("grade").value)/5 * 100;
	var time = new Date().getHours();
	var day;
	var response;
	 
	if (time >= 6 && time <12)
		day = "Good morning, ";
	else if (time >=  12 && time < 18)
		day = "Good afternoon, ";
	else if ((time >= 18 && time <= 23 ) || (time >=0 && time < 6))
		day = "Good night, ";
	
	if (y == 0)
		response = "You should at least read a worksheet!";
	else if (y == 20)
		response = "You could have done better!";
	else if (y == 40)
		response = "At least you have tried...";
	else if (y == 60)
		response = "Good enough.";
	else if (y == 80)
		response = "Very good.";
	else if (y == 100)
		response = "Excellent!";
	
	document.getElementById("submit").innerHTML = day + x + "<br>" + "Your grade: " + y + "%" + "<br>" + response;
}

function showMeDate(){
	var x = new Date(document.lastModified);
	var y = x.toUTCString();
	document.getElementById("date").innerHTML = "This page was modified " + y;
}

