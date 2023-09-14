const textarea = document.querySelector("textarea"),
  fileNameInput = document.querySelector(".file-name input"),
  selectMenu = document.querySelector(".save-as select"),
  saveBtn = document.querySelector(".save-btn");

selectMenu.addEventListener("click", () => {
  //getting selected option text
  let selectedOption = selectMenu.options[selectMenu.selectedIndex].text;
  saveBtn.innerText = `Save As ${selectedOption.split(" ")[0]} File`;
});

saveBtn.addEventListener("click", () => {
  const blob = new Blob([textarea.value], { type: selectMenu.value });
  //   URL.createObjectURL creates a url that represent passed object
  const fileUrl = URL.createObjectURL(blob);
  const link = document.createElement("a"); //create <a> tag
  link.download = fileNameInput.value; //passing file name as download
  link.href = fileUrl; //passing fileurl as href value link
  link.click();
});
