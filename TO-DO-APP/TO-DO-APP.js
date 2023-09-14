// Get references to HTML elements
let form = document.getElementById("form"); // The form element
let textInput = document.getElementById("textInput"); // Input for task text
let msg = document.getElementById("msg"); // Element to display validation message
let dateInput = document.getElementById("dateInput"); // Input for task date
let textarea = document.getElementById("textarea"); // Textarea for task description
let tasks = document.getElementById("tasks"); // Element to display tasks
let add = document.getElementById("add"); // Button to add a new task

// Add a submit event listener to the form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

// Function to perform form validation
let formValidation = () => {
  if (textInput.value === "") {
    console.log("failure");
    msg.innerHTML = "Task Cannot be blank";
  } else {
    console.log("success");
    msg.innerHTML = " ";
    acceptData();

    // Close the modal after clicking the add button
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();
    (() => {
      add.setAttribute("data-bs-dismiss", " ");
    })();
  }
};

// Initialize an array to store task data
let data = [{}];

// Function to accept and store task data
let acceptData = () => {
  data.push({
    text: textInput.value,
    date: dateInput.value,
    Description: textarea.value,
  });

  // Store task data in local storage
  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);

  createTasks(); // Call the function to display tasks
};

// Function to create and display tasks
let createTasks = () => {
  tasks.innerHTML = " "; // Clear the existing tasks
  data.map((x, y) => {
    return (tasks.innerHTML += ` <div id="${y}">
      <span class="fw-bold">${x.text}</span>
      <span class="small text-secondary">${x.date}</span>
      <p>${x.Description}</p>
      <div class="options">
        <i onClick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa-solid fa-pen-to-square"></i>
        <i onClick="deleteTask(this); createTasks()" class="fa-solid fa-trash-can"></i>
      </div>
    </div>`);
  });
  resetform(); // Call the function to reset the form
};

// Function to delete a task
let deleteTask = (e) => {
  e.parentElement.parentElement.remove();
  data.splice(e.parentElement.parentElement.id, 1);

  // Update local storage with the modified task data
  localStorage.setItem("data", JSON.stringify(data));
};

// Function to edit a task
let editTask = (e) => {
  let selectedTask = e.parentElement.parentElement;
  textInput.value = selectedTask.children[0].innerHTML;
  dateInput.value = selectedTask.children[1].innerHTML;
  textarea.value = selectedTask.children[2].innerHTML;

  deleteTask(e); // Call deleteTask to remove the edited task
};

// Function to reset the form
let resetform = () => {
  textInput.value = " ";
  dateInput.value = " ";
  textarea.value = " ";
};

// Immediately invoked function to load data from local storage on page load
(() => {
  data = JSON.parse(localStorage.getItem("data")) || []; // Get stored data or initialize an empty array
  createTasks(); // Call the function to display tasks
  console.log(data);
})();
