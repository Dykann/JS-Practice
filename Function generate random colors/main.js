const btn = document.querySelector("button");

const handleClick = function () {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * parseInt("FFFFFF", 16)).toString(16);
  btn.style.backgroundColor =
    "#" + Math.floor(Math.random() * parseInt("FFFFFF", 16)).toString(16);
};

btn.addEventListener("click", handleClick);
