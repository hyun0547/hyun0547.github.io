const mainbox = document.querySelector(".main-box"),
  pageBox = document.querySelector(".page-box");

var mouseUpX = 0,
 mouseUpY = 0,
 mouseDownX = 0,
 mouseDownY = 0;

function roundEquation(baseX, baseY, curX, curY){         //원의 방정식
  return (curX - baseX) ** 2 + (curY - baseY) ** 2;
}


function mousedifChk(mouseDif){     //마우스 업이 일어난 지점이 설정한 거리 보다 멀어 졌는지 확인
  if(mouseDif > 60000){            //마우스가 얼마나 멀어지면 화면전환을 할지
     return 1;
  }
  return 0;
}

function mouseUpEvent(e) {
  mainbox.removeEventListener("mousemove", mouseMoveEvent);
  mouseUpX = Number(e.clientX);
  mouseUpY = Number(e.clientY);
  const mouseDif = roundEquation(mouseDownX, mouseDownY, mouseUpX, mouseUpY);

  if(mousedifChk(mouseDif)){                  
    pageBox.style.opacity = "0"
    pageBox.style.transform = "scale(1.5)";
  }else{
    pageBox.style.opacity = "1";
    pageBox.style.transform = "scale(1)";
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

  pageBox.style.opacity = `${10000 / mouseDif}`;
  pageBox.style.transform = `scale(${1 + mouseDif * 0.000002})`;
}

mainbox.onmouseup = mouseUpEvent;
mainbox.onmousedown = mouseDownEvent;
