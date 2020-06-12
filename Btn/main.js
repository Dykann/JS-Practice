const btn = document.querySelector("button");

const handleClick = function () {
  btn.textContent = "Aurevoir";
  btn.style.backgroundColor = "red";
  document.body.style.backgroundColor = "coral";
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

console.log(maths(20, 1, 1));
