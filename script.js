// Query selectors
var icon = document.querySelector("#icon-bg");
var container = document.querySelector("body");
const root_theme = document.querySelector(':root');

var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

// Menu icon toggle
menuIcon.onclick = function() {
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
    if (bo1 == 1) {
        icon.setAttribute("src", "https://soltube.live/images/110827_moon_icon.png");
        root_theme.style.setProperty('--bg', 'black');
        root_theme.style.setProperty('--black', 'white');
        container.style.background = "black";
        container.style.color = "white";
        bo1 = 0;
    } else {
        icon.setAttribute("src", "https://soltube.live/images/110801_sun_icon.png");
        root_theme.style.setProperty('--bg', 'white');
        root_theme.style.setProperty('--black', 'black');
        container.style.background = "white";
        container.style.color = "black";
        bo1 = 1;
    }
});