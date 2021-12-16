const mainbox = document.querySelector(".main-box"),
  mainPageBox = document.querySelector(".main-page-box"),
  homePageBox = document.querySelector(".home-page-box"),
  topBarClock = document.querySelector(".top-bar-clock");

var mouseUpX = 0,
  mouseUpY = 0,
  mouseDownX = 0,
  mouseDownY = 0;

function roundEquation(baseX, baseY, curX, curY) {
  //원의 방정식
  return (curX - baseX) ** 2 + (curY - baseY) ** 2;
}

function mousedifChk(mouseDif) {
  //마우스 업이 일어난 지점이 설정한 거리 보다 멀어 졌는지 확인
  if (mouseDif > 60000) {
    //마우스가 얼마나 멀어지면 화면전환을 할지
    return 1;
  }
  return 0;
}

function topBarSetClock() {
  const today = new Date();
  const clock = document.createElement("span");
  clock.innerText = `${`${today.getHours()}`.padStart(
    2,
    "0"
  )}:${`${today.getMinutes()}`.padStart(2, "0")}`;
  topBarClock.appendChild(clock);
}

function mouseUpEvent(e) {
  mainbox.removeEventListener("mousemove", mouseMoveEvent);
  mouseUpX = Number(e.clientX);
  mouseUpY = Number(e.clientY);
  const mouseDif = roundEquation(mouseDownX, mouseDownY, mouseUpX, mouseUpY);

  if (mousedifChk(mouseDif)) {
    mainPageBox.style.opacity = "0";
    mainPageBox.style.transform = "scale(1.5)";
    mainPageBox.style.visibility = "hidden";
    homePageBox.style.transform = "scale(1)";
    homePageBox.style.opacity = "1";
    topBarSetClock();
    init();
  } else {
    mainPageBox.style.opacity = "1";
    mainPageBox.style.transform = "scale(1)";
  }
}

function mouseDownEvent(e) {
  mainbox.addEventListener("mousemove", mouseMoveEvent);
  mouseDownX = Number(e.clientX);
  mouseDownY = Number(e.clientY);
}

function mouseMoveEvent(e) {
  const mouseCurX = e.clientX,
    mouseCurY = e.clientY;

  const mouseDif = roundEquation(mouseDownX, mouseDownY, mouseCurX, mouseCurY);

  mainPageBox.style.opacity = `${10000 / mouseDif}`;
  mainPageBox.style.transform = `scale(${1 + mouseDif * 0.000007})`;
}

function MainPageAction() {
  mainbox.onmouseup = mouseUpEvent;
  mainbox.onmousedown = mouseDownEvent;
}
function init() {
  mainbox.onmouseup = null;
  mainbox.onmousedown = null;
}
MainPageAction();
