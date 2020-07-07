const box = document.querySelector(".box");

const launchEffect = () => {
  box.classList.toggle("opening");
  setTimeout(function () {
    box.classList.toggle("open");
    box.classList.toggle("image");
  }, 600);
};

box.addEventListener("click", launchEffect);
window.addEventListener("load", launchEffect);
