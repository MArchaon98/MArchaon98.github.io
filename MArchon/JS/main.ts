'use strict';

function welcomeUser(): void {
    let userName: string | null = prompt("Welcome! Please enter your name:");

    if (userName) {
        const welcomeMessageElement = document.getElementById("welcome-message");
        if (welcomeMessageElement) {
            welcomeMessageElement.innerText = `Welcome, ${userName}! Welcome to the site`;
        }
    }
}

let currentImageIndex = 0;
const images = [
    'images/Tankhunter.PNG',
    'images/warframe2024-snapshot-1.jpg',
    'images/warframe2024-snapshot-2.jpg'
];

const mainImage = document.getElementById('main-image') as HTMLImageElement | null;

function changeImage(index: number): void {
    if (mainImage) {
        currentImageIndex = index;
        mainImage.src = images[currentImageIndex];
    }
}

function nextImage(): void {
    if (mainImage) {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        mainImage.src = images[currentImageIndex];
    }
}

function prevImage(): void {
    if (mainImage) {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        mainImage.src = images[currentImageIndex];
    }
}

document.getElementById("contactForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = (document.getElementById("name") as HTMLInputElement).value;
    let email = (document.getElementById("email") as HTMLInputElement).value;
    let subject = (document.getElementById("subject") as HTMLInputElement).value;
    let message = (document.getElementById("message") as HTMLTextAreaElement).value;

    if (name && email && subject && message) {
        document.getElementById("responseMessage")!.textContent = "Message sent successfully!";
        document.getElementById("responseMessage")!.style.color = "green";
        (this as HTMLFormElement).reset();
    } else {
        document.getElementById("responseMessage")!.textContent = "Please fill in all fields.";
        document.getElementById("responseMessage")!.style.color = "red";
    }
});
let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let mail = "test@example.com";

if (regex.test(mail)) {
    console.log("Valid email address");
} else {
    console.log("Invalid email address");
}
