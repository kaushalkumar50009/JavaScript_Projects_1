let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

// form.addEventListener("submit", () => {
//   console.log("button Clicked");
// });

//button clicked
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button Clicked");
  formValidation();
});

//form validate either it will be success or will be failure
let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Posts cannot be blanked";
    console.log("error");
  } else {
    msg.innerHTML = " ";
    console.log("success");
    acceptData();
  }
};

//accept data and store data
let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  console.log("data pushed");
  createPost();
};

//upload on screen
let createPost = () => {
  posts.innerHTML += `<div class="posts_items">
  <p>${data.text} 1</p>
  <span class="options">
      <i onClick="updatePost(this)" class="fa-solid fa-pen-to-square"></i>
      <i onClick= "deletePost(this)" class="fa-solid fa-trash-can"></i>
  </span>
</div>`;
  // clear the text area when post will be created
  input.value = " ";
};

//delete post
let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

//update post
let updatePost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
