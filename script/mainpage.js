const mainbox = document.querySelector(".main-box");

function mouseUpEvent() {
  mainbox.removeEventListener("mousemove", mouseMoveEvent);
}

function mouseDownEvent() {
  mainbox.addEventListener("mousemove", mouseMoveEvent);
}

function mouseMoveEvent() {
  console.log("hello");
}

mainbox.onmouseup = mouseUpEvent;
mainbox.onmousedown = mouseDownEvent;
