// console.log({ fruit: ["pomme"] });

// console.log(khaov);

const cigarettes = [
  { marque: "malboro", prix: "20€", stock: 200 },
  { marque: "philip morris", prix: "9,90€", stock: 100 },
  { marque: "lucky strike", prix: "8€", stock: 55 },
];
// console.log(cigarettes);

// console.log(cigarettes[2].prix);

const malboroPrix = document.querySelector(".malboro .prix");
console.log(malboroPrix);
const malboro = cigarettes[0];
malboroPrix.textContent = malboro.prix;

const morris = cigarettes[1];
const morrisPrix = document.querySelector(".philip-morris .prix");
console.log(morrisPrix);
morrisPrix.textContent = morris.prix;

const strikePrix = document.querySelector(".lucky-strike .prix");
console.log(strikePrix);
strikePrix.textContent = cigarettes[2].prix;

const malboroStock = document.querySelector(".malboro .stock");

if (cigarettes[0].stock < 100) {
  malboroStock.textContent = "Attention";
} else {
  malboroStock.textContent = "En stock";
}
const morrisStock = document.querySelector(".philip-morris .stock");

morrisStock.textContent = cigarettes[1].stock;

const strikeStock = document.querySelector(".lucky-strike .stock");

if (cigarettes[2].stock < 50) {
  strikeStock.textContent = "Attention";
} else {
  strikeStock.textContent = "En stock";
}

////////////

const khaov = [
  { name: "tod", age: 23, isMale: true },
  { name: "titi", age: 21, isMale: true },
  { name: "rene", age: 19, isMale: true },
  { name: "papa", age: 48, isMale: true },
  { name: "maman", age: 52, isMale: false },
];

// console.log(khaov);
// const tod = khaov[0];
// const rene = khaov[2];

const [tod, titi, rene, lara] = khaov;

console.log(lara);
