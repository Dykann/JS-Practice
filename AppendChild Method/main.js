const khaovUl = document.querySelector(".khaov");
const khaovs = ["Dykann", "Tony", "Rene", "Kheang", "Amelie", "Lara", "Mystic"];

khaovs.forEach(function (khaov) {
  const p = document.createElement("p");
  p.innerText = `${khaov} Khaov`;
  khaovUl.appendChild(p);
});

const btn = document.querySelector("button");
const chingUl = document.querySelector(".ching");
const chings = ["Kahn", "Kevin", "Elodie", "Celine", "Iley", "Tiew"];

btn.addEventListener("click", () => {
  if (chingUl.childNodes.length > 0) {
    return;
  }
  chings.forEach(function (ching) {
    const li = document.createElement("li");
    li.innerText = `${ching} Ching`;
    chingUl.appendChild(li);
  });
});
