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