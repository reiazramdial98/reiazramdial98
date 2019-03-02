/*this makes the text type out one char at a time***********************/
var i = 0;
var txt = " All About me: Reiaz Ramdial" ; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */


function typeWriter() {

  if (i < txt.length) {
    document.getElementById('name').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

$(document).ready(function(){
	$("#name").hover(enter, leave);
	function enter() {
  		this.style.color = "green";
  		this.style.fontStyle = "italics";
	} 
function leave() {
  this.style.color = "pink";
  this.style.fontStyle = "normal";
}



});