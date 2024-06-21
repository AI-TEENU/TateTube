var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
var icon = document.querySelector("#icon-bg");
var container = document.querySelector("body");
const root_theme = document. querySelector(':root');
menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}
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

var metaLogo = document.querySelector(".user-icon");


var bo1 = 0;
icon.addEventListener("click", () => {
    if(bo1 == 1) {
        icon.setAttribute("src", "images/110827_moon_icon.png")
        container.style.background = "black";
        root_theme.style.setProperty('--bg', 'black');
        root_theme.style.setProperty('--black', 'white');
        icon.classList.toggle("ic");
        // icon.innerHTML = '<?xml version="1.0" ?><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1,.cls-2{fill:none;}.cls-2{stroke:#000;stroke-linecap:round;stroke-linejoin:round;}</style></defs><g data-name="Layer 2" id="Layer_2"><g id="Workspace"><rect class="cls-1" height="30px" width="30px"/><path class="cls-2" d="M5.17,12.62A5.25,5.25,0,1,0,12.6,5.2L12.4,5A7,7,0,1,1,5,12.43Z"/></g></g></svg>';
        bo1 = 0;
    }
    else {
        icon.setAttribute("src", "https://soltube.live/images/110801_sun_icon.png");
        root_theme.style.setProperty('--bg', 'white');
        root_theme.style.setProperty('--black', 'black');
        icon.classList.toggle("ic");
        bo1 = 1;
        // icon.innerHTML = <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 0 0 512 512" height="30px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="30px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path d="M256,144c-61.75,0-112,50.25-112,112s50.25,112,112,112s112-50.25,112-112S317.75,144,256,144z M256,336    c-44.188,0-80-35.812-80-80c0-44.188,35.812-80,80-80c44.188,0,80,35.812,80,80C336,300.188,300.188,336,256,336z M256,112    c8.833,0,16-7.167,16-16V64c0-8.833-7.167-16-16-16s-16,7.167-16,16v32C240,104.833,247.167,112,256,112z M256,400    c-8.833,0-16,7.167-16,16v32c0,8.833,7.167,16,16,16s16-7.167,16-16v-32C272,407.167,264.833,400,256,400z M380.438,154.167    l22.625-22.625c6.25-6.25,6.25-16.375,0-22.625s-16.375-6.25-22.625,0l-22.625,22.625c-6.25,6.25-6.25,16.375,0,22.625    S374.188,160.417,380.438,154.167z M131.562,357.834l-22.625,22.625c-6.25,6.249-6.25,16.374,0,22.624s16.375,6.25,22.625,0    l22.625-22.624c6.25-6.271,6.25-16.376,0-22.625C147.938,351.583,137.812,351.562,131.562,357.834z M112,256    c0-8.833-7.167-16-16-16H64c-8.833,0-16,7.167-16,16s7.167,16,16,16h32C104.833,272,112,264.833,112,256z M448,240h-32    c-8.833,0-16,7.167-16,16s7.167,16,16,16h32c8.833,0,16-7.167,16-16S456.833,240,448,240z M131.541,154.167    c6.251,6.25,16.376,6.25,22.625,0c6.251-6.25,6.251-16.375,0-22.625l-22.625-22.625c-6.25-6.25-16.374-6.25-22.625,0    c-6.25,6.25-6.25,16.375,0,22.625L131.541,154.167z M380.459,357.812c-6.271-6.25-16.376-6.25-22.625,0    c-6.251,6.25-6.271,16.375,0,22.625l22.625,22.625c6.249,6.25,16.374,6.25,22.624,0s6.25-16.375,0-22.625L380.459,357.812z" fill="#1D1D1B"/></g></g></svg>
    }
});