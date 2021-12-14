const mainbox = document.querySelector(".main-box");

mainbox.addEventListener("mousedown", function () {
  mainbox.addEventListener("mousemove", function () {
    console.log("asdf");
  });
});
