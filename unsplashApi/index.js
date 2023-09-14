// Get references to the HTML elements
const image = document.getElementById("gallery"); // The image container
const btn = document.getElementById("btn"); // The button to fetch images
const errormess = document.getElementById("errormess"); // Error message container

// Initialize a variable to store image elements
let imgs = "";

// Function to fetch and display images
function fetchImage() {
  // Get the number of images to fetch from user input
  const inputval = document.getElementById("input").value;

  // Check if the input value is outside the range (1 to 20)
  if (inputval > 20 || inputval < 1) {
    // Display an error message and exit the function
    errormess.style.display = "block";
    return;
  }

  // Fetch images from the Unsplash API
  fetch(
    `https://api.unsplash.com/photos?per_page=${inputval}&page=1&client_id=BlYnICCK9F2CydvKkcbsc-5S6ojKluSJATqdZlFaaXQ`
  )
    .then((res) => res.json())
    .then((data) => {
      // Iterate through the fetched images
      data.forEach((pics) => {
        // Create an image element with the source URL and alt text
        imgs += `<img src=${pics.urls.small} alt="unsplash image"/>`;

        // Update the image container with the new image
        //         // imgs += `<h4> ${pics.alt_description} </h4>`;
        image.innerHTML = imgs;
      });
    });
}

// Add a click event listener to the button to trigger image fetching
btn.addEventListener("click", fetchImage);
