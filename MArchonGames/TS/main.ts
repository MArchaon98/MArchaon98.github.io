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
