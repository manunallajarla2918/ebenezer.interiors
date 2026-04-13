/* CATEGORY GALLERY LOADER */

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

const gallery = document.getElementById("gallery");

const images = {
    glasswindows: [
        "images/glasswindows/1.jpg",
        "images/glasswindows/2.jpg",
        "images/glasswindows/3.jpg"
    ],
    messdoors: [
        "images/messdoors/1.jpg",
        "images/messdoors/2.jpg",
        "images/messdoors/3.jpg"
    ],
    slidingdoors: [
        "images/slidingdoors/1.jpg",
        "images/slidingdoors/2.jpg",
        "images/slidingdoors/3.jpg"
    ],
    upvcceilings: [
        "images/upvcceilings/1.jpg",
        "images/upvcceilings/2.jpg",
        "images/upvcceilings/3.jpg"
    ],
    woodworks: [
        "images/woodworks/1.jpg",
        "images/woodworks/2.jpg",
        "images/woodworks/3.jpg"
    ]
};

if(category && images[category]){
    images[category].forEach(function(src){
        let img = document.createElement("img");
        img.src = src;
        img.classList.add("gallery-img");
        gallery.appendChild(img);
    });
}


/* BACKGROUND SLIDER */

const bgImages = [
"bgimages/1.jpg",
"bgimages/2.jpg",
"bgimages/3.jpg",
"bgimages/4.jpg",
"bgimages/5.jpg"
];

let slides = document.querySelectorAll(".slide");
let current = 0;

function slider(){

slides[current].classList.remove("active");

current++;

if(current >= slides.length){
current = 0;
}

slides[current].classList.add("active");

}

setInterval(slider,3000);
// Updated hamburger menu toggle with error handling
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
    hamburger.onclick = function () {
        navLinks.classList.toggle("active");
    };
} else {
    console.error("Hamburger menu elements not found: Ensure HTML has elements with IDs 'hamburger' and 'navLinks'.");
}