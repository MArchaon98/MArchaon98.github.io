// Event listener for form submission (with validation)
document.getElementById("contact-form").addEventListener("submit", function(event) {
  // Get the form elements
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Clear previous error and success messages
  document.getElementById("error-message").style.display = "none";
  document.getElementById("success-message").style.display = "none";

  // Basic validation for empty fields
  if (!name || !email || !message) {
      document.getElementById("error-message").style.display = "block";
      event.preventDefault();
      return;
  }

  // Validate email format using regular expression
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
      document.getElementById("error-message").style.display = "block";
      event.preventDefault();
      return;
  }

  // If everything is fine, show success message
  document.getElementById("success-message").style.display = "block";
});


// Parallax effect for background
/* 
window.addEventListener('scroll', function() {
  const parallax = document.querySelector('.parallax');
  const offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";  // Adjust this factor for different scrolling speeds
}); 
*/

