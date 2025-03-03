'use strict';

function welcomeUser() {
  let userName: string | null = prompt("Welcome! Please enter your name:");

  if (userName) {
    document.getElementById("welcome-message").innerText = Welcome, ${username}! Welcome to the site;
  }
}