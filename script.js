// Query selectors
var icon = document.querySelector("#icon-bg");
var container = document.querySelector("body");
const root_theme = document.querySelector(':root');
var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
window.addEventListener('load', async () => {
        if (window.solana) {
            try {
                await window.solana.connect({ onlyIfTrusted: true });
                console.log('Connected to Phantom wallet');
            } catch (err) {
                console.log('User is not connected to the wallet');
            }
        } else {
            console.log('Phantom wallet not found. Please install it.');
        }
});
document.getElementById('connect-button').addEventListener('click', async () => {
        if (window.solana) {
            try {
                const response = await window.solana.connect();
                console.log('Connected to Phantom wallet:', response.publicKey.toString());
                // You can now interact with the wallet using response.publicKey
            } catch (err) {
                console.error('Connection to Phantom wallet failed:', err);
            }
        } else {
            alert('Phantom wallet not found. Please install it.');
        }
});
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
        icon.setAttribute("src", "https://soltube.live/images/110801_sun_icon.png");
        root_theme.style.setProperty('--bg', 'black');
        root_theme.style.setProperty('--black', 'white');
        container.style.background = "black";
        container.style.color = "white";
        icon.classList.toggle("ic");
        bo1 = 0;

    } else {
        icon.setAttribute("src", "https://soltube.live/images/110827_moon_icon.png");
        root_theme.style.setProperty('--bg', 'white');
        root_theme.style.setProperty('--black', 'black');
        container.style.background = "white";
        container.style.color = "black";
        icon.classList.toggle("ic");
        bo1 = 1;
    }
});