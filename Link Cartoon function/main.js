const vieHTML = document.querySelector(".vie");
const pointVie = document.querySelector(".point-de-vie");
const link = document.querySelector(".link-img");

let pdv = 100;
vieHTML.textContent = pdv;

link.addEventListener("click", function () {
  if (pdv > 0) {
    pdv = pdv - 10;
    vieHTML.textContent = pdv;
  }
  if (pdv === 0) {
    pointVie.textContent = "GAME OVER";
    document.body.style.backgroundColor = "red";
  }
});
