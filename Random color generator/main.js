const btn = document.querySelector("button");

const handleClick = function () {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * parseInt("FFFFFF", 16)).toString(16);
  btn.style.backgroundColor =
    "#" + Math.floor(Math.random() * parseInt("FFFFFF", 16)).toString(16);

  btn.classList.toggle("btn-style");
  btn.classList.toggle("transition");
};

btn.addEventListener("click", handleClick);
