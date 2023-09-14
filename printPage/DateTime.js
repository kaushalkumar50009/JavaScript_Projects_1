// Get the current date and time
const today = new Date();

// Get the day of the week (0 = Sunday, 1 = Monday, ...)
const day = today.getDay();

// Array of day names
const daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Output the current day of the week
console.log(`Today is: ${daylist[day]}.`);

// Get the current hour, minute, and second
let hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();

// Determine whether it's AM or PM
let prepand = hour >= 12 ? " PM " : " AM ";

// Convert 24-hour time to 12-hour time
hour = hour >= 12 ? hour - 12 : hour;

// Special cases for midnight and noon
if (hour === 0 && prepand === " PM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = " Noon";
  } else {
    hour = 12;
    prepand = " PM";
  }
}

if (hour === 0 && prepand === " AM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = " Midnight";
  } else {
    hour = 12;
    prepand = " AM";
  }
}

// Output the current time
console.log(`Current Time: ${hour}${prepand} : ${minute} : ${second}`);

// Function to print the current page when called
function print_current_page() {
  window.print();
}
