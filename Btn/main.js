const btn = document.querySelector("button");

const handleClick = function () {
  btn.classList.toggle("open");
  btn.textContent = "Aurevoir";
  btn.style.backgroundColor = "grey";
};

btn.addEventListener("click", handleClick);

function maths(a, b, c) {
  if (a + b + c < 10) {
    return "inférieur à 10";
  } else if (a + b + c > 20) {
    return "supérieur à 20";
  } else {
    return "entre 10 et 20";
  }
}

console.log(maths(5, 5, 5));
