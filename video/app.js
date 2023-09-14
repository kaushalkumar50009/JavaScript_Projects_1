// Select the video container
const video = document.querySelector(".video-container");

// Select the switch button
const switchBtn = document.querySelector(".switch-btn");

// Add a click event listener to the switch button
switchBtn.addEventListener("click", function () {
  // Check if the switch button has the "slide" class
  if (switchBtn.classList.contains("slide")) {
    // If it has the "slide" class, remove it and play the video
    switchBtn.classList.remove("slide");
    video.play();
  } else {
    // If it doesn't have the "slide" class, add it and pause the video
    switchBtn.classList.add("slide");
    video.pause();
  }

  // Alternative way to achieve the same functionality:
  // Check if the switch button doesn't have the "slide" class
  // if (!switchBtn.classList.contains("slide")) {
  //   // If it doesn't have the "slide" class, add it and pause the video
  //   switchBtn.classList.add("slide");
  //   video.pause();
  // } else {
  //   // If it has the "slide" class, remove it and play the video
  //   switchBtn.classList.remove("slide");
  //   video.play();
  // }
});

// Preloader
const preloader = document.querySelector(".preloader");

// Add a load event listener to the window
window.addEventListener("load", function () {
  // When the page is fully loaded, hide the preloader by adding the "hide-preloader" class
  preloader.classList.add("hide-preloader");
});
