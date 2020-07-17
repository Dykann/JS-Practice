const boxes = document.querySelectorAll(".box");

boxes.forEach(function (box) {
  box.textContent = "boîte";
  box.style.backgroundColor = "red";
  console.log(box);
});

const titre = document.querySelector("h1");
titre.textContent = "Content";

const containers = document.querySelectorAll(".container");

containers.forEach(function (content) {
  content.style.transform = "rotate(45deg) translateX(40px)";
  content.style.transition = "transform 1s";
});

for (let x = 400; x >= 100; x = x - 5) {
  if (x === 350) {
    console.log("issou");
  } else {
    console.log(x);
  }
}
