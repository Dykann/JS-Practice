const title = document.querySelector("h1");
const letterArray = [...title.textContent];

console.log(letterArray);

const spans = letterArray
  .map(function (letter) {
    return `<span class="jump">${letter}</span>`;
  })
  .join("");

title.innerHTML = spans;
