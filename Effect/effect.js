const box = document.querySelector(".box");

box.addEventListener("click", launchEffect);

function launchEffect() {
  box.classList.toggle("opening");
  setTimeout(function () {
    box.classList.toggle("open");
    box.classList.toggle("image");
  }, 600);
}
