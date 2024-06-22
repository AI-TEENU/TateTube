<<<<<<< HEAD
=======
// Query selectors
var icon = document.querySelector("#icon-bg");
var container = document.querySelector("body");
const root_theme = document.querySelector(':root');

>>>>>>> d3582354fc4075d32841655e7ac488fdfeb71963
var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
var icon = document.querySelector("#icon-bg");
var icon1 = document.querySelector("#icon-bg1");

<<<<<<< HEAD
var container = document.querySelector("body");
const root_theme = document. querySelector(':root');
menuIcon.onclick = function(){
=======
// Menu icon toggle
menuIcon.onclick = function() {
>>>>>>> d3582354fc4075d32841655e7ac488fdfeb71963
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}

// Slider functionality
const slider = document.querySelector(".slider");
const sliderImages = document.querySelectorAll(".slider-img");
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    updateSlider();
}

function updateSlider() {
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

// Automatically switch to the next slide every 3 seconds
setInterval(nextSlide, 3000);

// Dark/Light mode toggle
var bo1 = 0;

icon.addEventListener("click", () => {
<<<<<<< HEAD
    if(bo1 == 1) {
        icon.setAttribute("src", "images/110801_sun_icon.png")
        container.style.background = "black";
        root_theme.style.setProperty('--bg', 'black');
        root_theme.style.setProperty('--black', 'white');
        root_theme.style.setProperty('--grey', '#f7f7f7');
        root_theme.style.setProperty('--bblack', '#acacac');
        root_theme.style.setProperty('--border', 'rgba(255, 239, 239, 0.8)');
        icon.classList.toggle("ic");
        // icon1.classList.toggle("ic");
        
        // icon.innerHTML = '<?xml version="1.0" ?><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1,.cls-2{fill:none;}.cls-2{stroke:#000;stroke-linecap:round;stroke-linejoin:round;}</style></defs><g data-name="Layer 2" id="Layer_2"><g id="Workspace"><rect class="cls-1" height="30px" width="30px"/><path class="cls-2" d="M5.17,12.62A5.25,5.25,0,1,0,12.6,5.2L12.4,5A7,7,0,1,1,5,12.43Z"/></g></g></svg>';
        bo1 = 0;
    }
    else {
        icon.setAttribute("src", "images/110827_moon_icon.png");
        root_theme.style.setProperty('--bg', 'white');
        root_theme.style.setProperty('--black', 'black');
        root_theme.style.setProperty('--grey', '#5a5a5a');
        root_theme.style.setProperty('--bblack', '##333');
        root_theme.style.setProperty('--border', 'rgba(0, 0, 0, 0.2)');
        icon.classList.toggle("ic");
        // icon1.classList.toggle("ic");
        
=======
    if (bo1 == 1) {
        icon.setAttribute("src", "https://soltube.live/images/110827_moon_icon.png"); // White moon icon
        root_theme.style.setProperty('--bg', 'black');
        root_theme.style.setProperty('--black', 'white');
        container.style.background = "black";
        container.style.color = "white";
        bo1 = 0;
    } else {
        icon.setAttribute("src", "	https://soltube.live/images/110801_sun_icon.png"); // Black sun icon
        root_theme.style.setProperty('--bg', 'white');
        root_theme.style.setProperty('--black', 'black');
        container.style.background = "white";
        container.style.color = "black";
>>>>>>> d3582354fc4075d32841655e7ac488fdfeb71963
        bo1 = 1;
    }
});
