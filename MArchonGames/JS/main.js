'use strict';

function welcomeUser() {
  let userName = prompt("Welcome! Please enter your name:");
  if (userName) {
    document.getElementById("welcome-message").innerText = Welcome, ${username}! Welcome to the site;
  }
}