var i = 12;
function myFunction()	{
var counter = document.getElementById('dropdown').value;
document.getElementById('beschikbaarheid').innerHTML= "Beschikbaarheid: " + i + "/18";
}
/*function myDeelFunction()	{
var z = document.getElementByClassName('login').value;
document.getElementById('beschikbaarheid').innerHTML= "Beschikbaarheid: " + (i+1) + "/18";
}*/
/*function that counts up to 18, every time an extra spot becomes available*/
function myDeelFunction(){
	i++;
	if(i<=18) {
	document.getElementById('beschikbaarheid').innerHTML="Beschikbaarheid: " + i + "/18";
} else {
	document.getElementById('beschikbaarheid').innerHTML="Beschikbaarheid: 18/18";
}
}
/* function to counts free spaces down to zero when space is reserved*/
function myReserveerFunction(){
	i--;
	if(i<=18 && i>=0) {
	document.getElementById('beschikbaarheid').innerHTML="Beschikbaarheid: " + i + "/18";
} else {
	document.getElementById('beschikbaarheid').innerHTML="Beschikbaarheid: 0/18";
}
}
/*animations*/


/*
$("button").click(function){
	$("div").animate({left: '250px'});
	
});*/
/*
$(document).ready(function){
$(".button").onClick(function){
$(".button").animate{
	height: '220px',
	width: '220px',
});
});
}
*/
