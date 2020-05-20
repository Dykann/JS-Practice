const btn = document.querySelector("button");
const span = document.querySelector("span");

const handleClick = () => {
  span.textContent = parseInt(span.textContent) + 1;
  parseInt(span.textContent) === 2 ? console.log("c'est égal à 2") : console.log("ce n'est pas 2");
};

btn.addEventListener("click", handleClick);
