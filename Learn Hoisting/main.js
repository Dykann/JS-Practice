console.log(tony);

// 1) never use VAR function scoped vs block scoped

var tony = "tony";
let titi = "jean jacques";
console.log(titi);
if (true) {
  let titi = "titi";
}

console.log(titi);

// 2) Hoisting des variables & function
// avec var
// avec function
const btn = document.querySelector("button");

const handleClick = function () {
  console.log("salut");
};

btn.addEventListener("click", handleClick);
