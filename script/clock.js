const clock = document.querySelector(".clock");
const date = document.querySelector(".date");

function setClock() {
  const today = new Date();
  const week = today.getDay();

  const weeks = ["일", "월", "화", "수", "목", "금", "토"];

  clock.innerText = `${`${today.getHours()}`.padStart(
    2,
    "0"
  )}:${`${today.getMinutes()}`.padStart(2, "0")}`;

  date.innerHTML = `${today.getMonth() + 1}월 ${today.getDate()}일 <span>${
    weeks[week]
  }요일<span>`;
}

setClock();
setInterval(setClock, 1000);
