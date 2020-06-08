function salut(string, letter1, letter2) {
  return string.includes(letter1 || letter2);
}

salut("je suis risitas", "o", "n");

function math(a, b) {
  //   if (a < 5 && b > 1) {
  //     return "true";
  //   } else {
  //     return "false";
  //   }
  return a < 5 && b > 1;
}

math(3, 4);

// never use alert()
const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  alert("Alert");
});

// setInterval(function () {
//   console.log("salut");
// }, 1000);

// data passed by value passed by reference

const voiture = ["toyota", "bmw", "audi"];

// console.log("voiture", ...voiture);
const voitureBis = [...voiture];

voitureBis.push("mercedes");

console.log("voiture", voiture);
console.log("voitureBis", voitureBis);

const fruits = ["fraise", "banane", "pomme"];

console.log(fruits);
console.log([fruits]);
console.log([...fruits]);

console.log(fruits === fruits);
console.log(fruits === [...fruits]);
