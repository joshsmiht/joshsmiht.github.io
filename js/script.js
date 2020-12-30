// Menu Javascript
let openBtn = document.getElementById("open-menu");
openBtn.addEventListener("click", () => {
   showNav();
});
let closeBtn = document.getElementById("close-menu");
closeBtn.addEventListener("click", () => {
hideNav();
});
function showNav() {
   document.querySelector("nav").style.visibility = "visible";
   document.querySelector("nav").style.opacity = '1';
   document.getElementById('open-menu').style.visibility = 'hidden';
   document.getElementById('close-menu').style.visibility = 'visible';
}
function hideNav() {
   document.querySelector("nav").style.visibility = "hidden";
   document.querySelector('nav').style.opacity = '0';
   document.getElementById('open-menu').style.visibility = 'visible';
   document.getElementById('close-menu').style.visibility = 'hidden';
}

// document.querySelector('.menu-btn').style.opacity = '1';
// document.querySelector(".menu-btn").style.opacity = '0';