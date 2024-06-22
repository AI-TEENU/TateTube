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
        icon.setAttribute("src", "images/110827_moon_icon.png");
        root_theme.style.setProperty('--bg', 'black');
        root_theme.style.setProperty('--black', 'white');
        container.style.background = "black";
        container.style.color = "white";
        bo1 = 0;
    } else {
        icon.innerHTML = '<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.5C12.2761 1.5 12.5 1.72386 12.5 2V4C12.5 4.27614 12.2761 4.5 12 4.5C11.7239 4.5 11.5 4.27614 11.5 4V2C11.5 1.72386 11.7239 1.5 12 1.5ZM12 19.5C12.2761 19.5 12.5 19.7239 12.5 20V22C12.5 22.2761 12.2761 22.5 12 22.5C11.7239 22.5 11.5 22.2761 11.5 22V20C11.5 19.7239 11.7239 19.5 12 19.5ZM4.5 12C4.5 11.7239 4.27614 11.5 4 11.5H2C1.72386 11.5 1.5 11.7239 1.5 12C1.5 12.2761 1.72386 12.5 2 12.5H4C4.27614 12.5 4.5 12.2761 4.5 12ZM22.5 12C22.5 11.7239 22.2761 11.5 22 11.5H20C19.7239 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.7239 12.5 20 12.5H22C22.2761 12.5 22.5 12.2761 22.5 12ZM5.79289 5.79289C5.98815 5.59763 6.01127 5.28121 5.85329 5.06066L5.70711 4.85355C5.31658 4.46302 4.68342 4.46302 4.29289 4.85355C3.90237 5.24408 3.90237 5.87724 4.29289 6.26777L4.43908 6.47487C4.59707 6.69542 4.91349 6.71854 5.10876 6.52328ZM18.2929 18.2929C18.6834 18.6834 19.3166 18.6834 19.7071 18.2929C20.0976 17.9024 20.0976 17.2692 19.7071 16.8787L19.5609 16.6716C19.3656 16.4763 19.0492 16.4532 18.8539 16.6485C18.6586 16.8438 18.6355 17.1602 18.8307 17.3554L18.9769 17.5625C19.1383 17.7831 19.4547 17.8062 19.65 17.6109ZM18.8307 6.52328C18.6355 6.71854 18.3191 6.69542 18.1238 6.50015C17.9285 6.30489 17.9054 5.98847 18.1006 5.79321L18.2468 5.5861C18.6373 5.19557 19.2704 5.19557 19.661 5.5861C20.0515 5.97663 20.0515 6.6098 19.661 7.00032L19.5148 7.20743C19.3195 7.4027 19.0031 7.42581 18.8079 7.23055ZM5.85329 18.6465C6.01127 18.426 6.03439 18.1096 5.83913 17.9143C5.64386 17.7191 5.32745 17.696 5.13218 17.8912L4.986 18.0983C4.59548 18.4889 4.59548 19.122 4.986 19.5125C5.37653 19.903 6.00969 19.903 6.40022 19.5125L6.54641 19.3054C6.70538 19.0848 6.72851 18.7684 6.53324 18.5732C6.33797 18.3779 6.02155 18.3548 5.82629 18.5501ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5ZM12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12C15.5 13.933 13.933 15.5 12 15.5Z" fill="black"/></svg>';
        root_theme.style.setProperty('--bg', 'white');
        root_theme.style.setProperty('--black', 'black');
        container.style.background = "white";
        container.style.color = "black";
        bo1 = 1;
    }
});
