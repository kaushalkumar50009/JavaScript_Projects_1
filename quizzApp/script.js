const question = [
  {
    que: "this is my first ",
    a: "HTML",
    b: "css",
    c: "javaScript",
    d: "PHP",
    correct: "a",
  },
  {
    que: "this is my second",
    a: "HT",
    b: "cd",
    c: "jav",
    d: "PP",
    correct: "c",
  },
  {
    que: "this is my third",
    a: "ML",
    b: "cs",
    c: "Script",
    d: "HP",
    correct: "d",
  },
  {
    que: "this is my fourth",
    a: "HTL",
    b: "ss",
    c: "java",
    d: "PP",
    correct: "a",
  },
];

// Initialize quiz variables
let index = 0;
let total = question.length;
let right = 0;
let wrong = 0;

// Get references to HTML elements
const ques = document.getElementById("ques");
const optionInputs = document.querySelectorAll(".options");

// Function to load and display a question
const loadQuestion = () => {
  // Check if all questions have been answered
  if (index === total) {
    return endQuiz();
  }

  // Reset the options
  reset();

  // Get the current question data
  const data = question[index];
  ques.innerText = `${index + 1}) ${data.que}`;

  // Populate options with question data
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.d;
  optionInputs[3].nextElementSibling.innerText = data.a;
};

// Function to submit a user's answer
const submitQuiz = () => {
  // Get the current question data
  const data = question[index];
  const ans = getAnswer();

  // Check if the answer is correct and update score
  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }

  // Move to the next question
  index++;
  loadQuestion();
  return;
};

// Function to get the selected answer
const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

// Function to reset the selected options
const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

// Function to display the quiz results
const endQuiz = () => {
  document.getElementById("box").innerHTML = `<h3> Thank You For Playing </h3>
  <h2> ${right} / ${total} are correct </h2>`;
};

// Load the first question
loadQuestion();
