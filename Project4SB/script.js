'use strict';

function welcomeUser() {
    var userName = prompt("Welcome! Please enter your name:");
    if (userName) {
        var welcomeMessageElement = document.getElementById("welcome-message");
        if (welcomeMessageElement) {
            welcomeMessageElement.innerText = "Welcome, " + userName + "! Welcome to the site";
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    welcomeUser();
});

var currentImageIndex = 0;
var images = [
    'images/Tankhunter.PNG',
    'images/warframe2024-snapshot-1.jpg',
    'images/warframe2024-snapshot-2.jpg'
];
var mainImage = document.getElementById('main-image');

function changeImage(index) {
    if (mainImage) {
        currentImageIndex = index;
        mainImage.src = images[currentImageIndex];
    }
}

function nextImage() {
    if (mainImage) {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        mainImage.src = images[currentImageIndex];
    }
}

function prevImage() {
    if (mainImage) {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        mainImage.src = images[currentImageIndex];
    }
}

// 🛠️ FIX: Was previously "a.addEventListener(...)"
var contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;

        if (name && email && subject && message) {
            document.getElementById("responseMessage").textContent = "Message sent successfully!";
            document.getElementById("responseMessage").style.color = "green";
            contactForm.reset();
        } else {
            document.getElementById("responseMessage").textContent = "Please fill in all fields.";
            document.getElementById("responseMessage").style.color = "red";
        }
    });
}

var regex = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var mail = "test@example.com";
if (regex.test(mail)) {
    console.log("Valid email address");
} else {
    console.log("Invalid email address");
}
