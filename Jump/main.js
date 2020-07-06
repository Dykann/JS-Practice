const title = document.querySelector("h1");

const letterArray = [...title.textContent];

// console.log(letterArray);

const spans = letterArray
  .map(function (letter) {
    return `<span class="jump">${letter}</span>`;
  })
  .join("");

title.innerHTML = spans;

Array.prototype.salut = function () {
  console.log("salut");
};

const khaov = ["titi", "tony", "rene", "papa", "maman", "lara", "mystic"];
const dogs = khaov.slice(5, 7);
console.log(dogs);
