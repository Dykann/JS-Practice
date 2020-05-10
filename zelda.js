let pdv = 100;

const vieHTML = document.querySelector(".vie");

vieHTML.textContent = pdv;

const link = document.querySelector(".link-img");

// quand on clique sur Link
link.addEventListener("click", function () {
  if (pdv === 0) {
    vieHTML.textContent = "DEAD";
    return null;
  }
  pdv = pdv - 10;
  vieHTML.textContent = pdv;
  console.log(pdv);
});
