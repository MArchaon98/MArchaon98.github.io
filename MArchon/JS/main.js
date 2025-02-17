"use strict";
let currentImageIndex = 0;
const images = [
    'images/Tankhunter.PNG',
    'images/warframe2024-snapshot-1.jpg',
    'images/warframe2024-snapshot-2.jpg'
];

const mainImage = document.getElementById('main-image');

function changeImage(index) {
    currentImageIndex = index;
    mainImage.src = images[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    mainImage.src = images[currentImageIndex];
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    mainImage.src = images[currentImageIndex];
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let subject = document.getElementById("subject").value;
let message = document.getElementById("message").value;

if (name && email && subject && message) {
    document.getElementById("responseMessage").textContent = "Message sent successfully!";
    document.getElementById("responseMessage").style.color = "green";
    this.reset(); 
} else {
    document.getElementById("responseMessage").textContent = "Please fill in all fields.";
    document.getElementById("responseMessage").style.color = "red";
}
});