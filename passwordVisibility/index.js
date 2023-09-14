// Get references to the password input field and the eye icon
const password = document.querySelector("#password");
const eyeIcon = document.querySelector("#eye");

// Add a click event listener to the eye icon
eyeIcon.addEventListener("click", () => {
  // Check if the eye icon currently shows an open eye (visible password)
  if (eyeIcon.classList.contains("fa-eye")) {
    // If visible, change the input type to "text" to show the password
    password.setAttribute("type", "text");

    // // you can use this approch also
    // eyeIcon.classList.remove(" fa-eye");
    // eyeIcon.classList.add("fa-eye-slash");

    // Replace the "fa-eye" class with "fa-eye-slash" to change the eye icon
    eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    // If hidden, change the input type back to "password" to hide the password
    password.setAttribute("type", "password");
    // Replace the "fa-eye-slash" class with "fa-eye" to change the eye icon back
    eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
  }
});
