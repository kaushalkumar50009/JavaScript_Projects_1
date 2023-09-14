// Get modal elements
const modalBtn = document.getElementById("add_blog_modal_button"); // Button to trigger modal
const modal = document.querySelector(".hide_modal"); // Modal container
const closeModal = document.querySelector(".hide_modal_btn"); // Button to close modals

// Show/hide modal when the button is clicked
modalBtn.addEventListener("click", () => {
    if (modal.classList.contains("show_modal")) {
        modal.classList.remove('show_modal'); // Hide modal if it's already shown
    } else {
        modal.classList.add('show_modal'); // Show modal if it's hidden
    }

    // If modal is shown, add a listener to close button
    if (modal.classList.contains("show_modal")) {
        closeModal.addEventListener("click", () => {
            modal.classList.remove('show_modal'); // Hide modal on close button click
        });
        resetForm(); // Reset the form inputs
        errorMessage.textContent = " "; // Clear error message
    }
});

// Get form and input elements
const form = document.querySelector(".form");
const input_image = document.querySelector("#image");
const imagePreview = document.querySelector("#imagePreview");
const input_title = document.querySelector("#title");
const input_smallDesc = document.querySelector("#small_desc");
const input_description = document.querySelector("#com_details");
const errorMessage = document.getElementById("error_message");

// Character counter setup for smallDesc input
const characterCounter = document.getElementById('characterCounter');
const maxLength = parseInt(input_smallDesc.getAttribute('maxlength'));

// Update character counter as user types
input_smallDesc.addEventListener('input', () => {
    const remainingChars = maxLength - input_smallDesc.value.length;
    characterCounter.textContent = `${remainingChars} characters remaining`;
});

// Handle form submission
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission
    formvalidation(); // Validate and process form data
});

// Handle image selection for preview
input_image.addEventListener("change", (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
        const reader = new FileReader();
        reader.onload = function () {
            imagePreview.src = reader.result; // Show selected image in preview
            imagePreview.style.display = "block"; // Display the image preview
        };
        reader.readAsDataURL(selectedFile);
    } else {
        imagePreview.src = "#"; // Clear preview source if no image is selected
        imagePreview.style.display = "none"; // Hide image preview
    }
});

// Validate form data
const formvalidation = () => {
    if (!input_title.value || !input_smallDesc.value || !input_description.value) {
        errorMessage.textContent = "all input field is required"; // Display error for missing inputs
    } else if (input_image.files.length === 0) {
        errorMessage.textContent = "Image is required"; // Display error for missing image
    } else {
        errorMessage.textContent = " "; // Clear error message
        inputFormValue(); // Process form data and store in local storage
        modal.classList.toggle("show_modal"); // Hide modal after successful submission
    }
};

// Store form data in local storage
let data = [];
const inputFormValue = () => {
    const imageData = imagePreview.src;
    data.push({
        image: imageData,
        title: input_title.value,
        smallDesc: input_smallDesc.value,
        description: input_description.value
    });
    localStorage.setItem('blog-data', JSON.stringify(data)); // Store data in local storage
    createBlog(); // Update blog card display
};

// Update the displayed blog cards
const createBlog = () => {
    const cardContainer = document.querySelector('.card_container');
    cardContainer.innerHTML = ''; // Clear existing content
    const getBlog = data.map((data, id) => {
        return `<div class="card" id=${id}>
        <div class="blog_image">
            <img src=${data.image} alt="kaushak">
        </div>
        <div class="blog_title" id="blog_title">
            <h3 class="title">
                ${data.title}
            </h3>
        </div>
        <div class="small_description" id="small_description">
            <p id="small_description">
                ${data.smallDesc}
            </p>
        </div>
        <button class="btn" id="btn" onClick="readBlog(this)">Read Full blog...</button>
    </div>`;
    });
    cardContainer.innerHTML = getBlog.join(""); // Populate card container with blog cards
    resetForm(); // Reset the form inputs
};

// Reset form inputs and character counter
const resetForm = () => {
    input_image.value = ""; // Clear the input value
    imagePreview.style.display = "none"; // Clear the image preview
    input_title.value = "";
    input_smallDesc.value = "";
    input_description.value = "";
    characterCounter.textContent = `${maxLength} characters remaining`; // Reset character counter
};

// Initialize data from local storage on page load
(() => {
    data = JSON.parse(localStorage.getItem("blog-data")) || [];
    createBlog(); // Display stored blog cards
})();

// Navigate to a specific blog page
let readBlog = (e) => {
    let selectedId = e.parentElement.id;
    localStorage.setItem("selectedBlogId", selectedId); // Store selected blog ID
    window.location = './blogPage.html'; // Redirect to the blog page
};
