let isGameStart = false; // Flag to check if the game has started
let totalCount = 0; // Total count of mosquitoes hit

// Function to start the game
function startGame() {
  document.getElementById("gameStatus").innerHTML = " game started"; // Update game status

  isGameStart = true; // Set game start flag to true
  totalCount = 0; // Reset total count

  let mosquito = document.getElementById("mosquito"); // Get the mosquito element
  let time = setInterval(() => {
    // Set an interval to move the mosquito every 2 seconds
    let i = Math.floor(Math.random() * 500) + 1;
    let j = Math.floor(Math.random() * 500) + 1;
    mosquito.style.left = i + "px";
    mosquito.style.top = j + "px";
  }, 2000);

  setTimeout(() => {
    // Set a timeout to end the game after 10 seconds
    clearInterval(time); // Clear the interval
    isGameStart = false; // Set game start flag to false
    document.getElementById("gameStatus").innerText = " game over"; // Update game status
  }, 10000);
}

// Function to reset the game
function resetGame() {
  isGameStart = false; // Set game start flag to false
  totalCount = 0; // Reset total count
  document.getElementById("totals").innerText = totalCount; // Update total count display

  let i = Math.floor(Math.random() * 500) + 1;
  let j = Math.floor(Math.random() * 500) + 1;
  mosquito.style.left = i + "px";
  mosquito.style.top = j + "px";
}

// Function to increment the count when a mosquito is hit
function hitmosquito() {
  if (isGameStart) {
    // Check if the game has started
    totalCount++;
    document.getElementById("totals").innerText = totalCount; // Update total count display
  }
}
