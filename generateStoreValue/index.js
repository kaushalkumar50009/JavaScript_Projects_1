//! 1st alternate way
// const btn = document.getElementById("btn");

// let showData = () => {
//   const firstName = document.getElementById("first_name").value;
//   const secondName = document.getElementById("second_name").value;

//   if (firstName && secondName) {
//     // console.log(randomValue);

//     let randomValue = Math.floor(Math.random() * 100);

//     let removeSpace = (firstName + secondName).replace(/\s/g, "");
//     let lowerCase = removeSpace.toLowerCase();
//     if (localStorage.getItem(lowerCase)) {
//       randomValue = localStorage.getItem(lowerCase);
//     } else {
//       localStorage.setItem(lowerCase, randomValue);
//     }
//     let showValue = document.createElement("div");
//     let hTag = document.createElement("h1");
//     hTag.textContent = randomValue;
//     showValue.appendChild(hTag);
//     document.body.insertAdjacentElement("afterbegin", showValue);
//   } else {
//     alert("please enter your name");
//   }
// };

// btn.addEventListener("click", () => {
//   showData();
// });

// ///////////////////////////////////////////////////////////////////////////
//! 2nd alternate way

// const btn = document.getElementById("btn");

// let showData = () => {
//   const firstName = document.getElementById("first_name").value;
//   const secondName = document.getElementById("second_name").value;

//   if (firstName && secondName) {
//     // console.log(randomValue);
//     let randomValue = Math.floor(Math.random() * 100);
//     let removeSpace = (firstName + secondName).replace(/\s/g, "");
//     let lowerCase = removeSpace.toLowerCase();
//     // localStorage.setItem(lowerCase, randomValue)

//     if (localStorage.getItem(lowerCase)) {
//       randomValue = localStorage.getItem(lowerCase);
//     } else {
//       localStorage.setItem(lowerCase, randomValue);
//     }

//     document.getElementById("total").innerText = randomValue;
//   } else {
//     alert("please enter your name");
//   }
// };

// btn.addEventListener("click", () => {
//   showData();
// });

/////////////////////////////////////////////////////////////////

//! 3rd alternate way generating and storing random value based on name and getting those value from local storage
const btn = document.getElementById("btn"); // Get the button element

// Function to show data
let showData = () => {
  const firstName = document.getElementById("first_name").value; // Get the first name input value
  const secondName = document.getElementById("second_name").value; // Get the second name input value

  if (firstName && secondName) {
    // Check if both names are entered
    let randomValue = Math.floor(Math.random() * 100); // Generate a random value
    let removeSpace = (firstName + secondName).replace(/\s/g, ""); // Remove spaces from the concatenated names
    let lowerCase = removeSpace.toLowerCase(); // Convert the names to lower case

    if (localStorage.getItem(lowerCase)) {
      // Check if the names already exist in local storage
      randomValue = localStorage.getItem(lowerCase); // Get the stored value
      document.getElementById("total").innerText = "calculating value"; // Show a loading message

      setTimeout(() => {
        // Set a timeout to simulate calculation time
        randomValue = localStorage.getItem(lowerCase); // Get the stored value again
        document.getElementById("total").innerText = randomValue; // Display the actual value after 2 seconds
      }, 2000);
    } else {
      // If the names don't exist in local storage
      localStorage.setItem(lowerCase, randomValue); // Store the random value with the names as key
      document.getElementById("total").innerText = "calculating value"; // Show a loading message

      setTimeout(() => {
        // Set a timeout to simulate calculation time
        document.getElementById("total").innerText = randomValue; // Display the actual value after 2 seconds
      }, 2000);
    }
  } else {
    alert("Please enter your name"); // Alert the user to enter their name if they haven't
  }
};

btn.addEventListener("click", showData); // Add an event listener to the button to run showData function when clicked
