const btn = document.querySelector("button");
const span = document.querySelector("span");

const handleClick = (event) => {
  document.body.style.backgroundColor = "black";
  span.textContent = parseInt(span.textContent) + 1;
  parseInt(span.textContent) === 2
    ? console.log("c'est égal à 2")
    : console.log(event);
};
btn.addEventListener("click", handleClick);

// objets destructuring manipulation

const family = {
  name: "famille",
  khaov: {
    chien: "lara",
    maman: "igna",
  },
};
const { maman, chien } = family.khaov;
// console.log(maman, chien);

const technology = {
  ordinateur: {
    grand: {
      apple: "macbook",
      dell: "xps",
      samsung: "windows",
    },
    petit: {
      emmy: "emmy",
      eden: "eden",
      julien: "julien",
    },
  },
};
const { samsung, apple, dell } = technology.ordinateur.grand;

const petitGrand = function (variable) {
  console.log(technology.ordinateur[variable]);
};
// petitGrand("grand");

// switch (if)
// const couleur = function (color) {
//   switch (color) {
//     case "red":
//       return (document.body.style.backgroundColor = color);
//     case "blue":
//       return (document.body.style.backgroundColor = color);
//     default:
//       return (document.body.style.backgroundColor = "black");
//   }
// };

// couleur("red");

const couleur = function (color) {
  if (color === "red") return (document.body.style.backgroundColor = color);
  if (color === "blue") return (document.body.style.backgroundColor = color);
  else return (document.body.style.backgroundColor = "black");
};

couleur("blue");
const handleScroll = function (event) {
  console.log(event);
};

window.addEventListener("scroll", handleScroll);
