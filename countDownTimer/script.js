const endDate = "21 sep 2023 10:00 PM";

document.getElementById("end-date").innerText = endDate;
const input = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();

  const diff = (end - now) / 1000; //millisec to sec
  //   console.log(diff);

  if (diff < 0) {
    return;
  }

  const day = Math.floor(diff / 60 / 60 / 24);
  input[0].value = day;

  const hour = Math.floor((diff / 60 / 60) % 24);
  input[1].value = hour;

  const minute = Math.floor((diff / 60) % 60);
  input[2].value = minute;

  const sec = Math.floor(diff % 60);
  input[3].value = sec;
}

clock();

/*
    1 day = 24 hour
    1 hour = 60min
    1 min = 60 sec

*/

setInterval(() => {
  clock();
}, 1000);
