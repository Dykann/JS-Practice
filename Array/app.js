//  MAP method

const clientUl = document.querySelector(".clients");

const clients = ["issou", "zoulman", "eric", "kousieng", "caca"];

const capitainClient = clients.map((client) => {
  return `${client} capitain`;
});

console.log(capitainClient);

const clientsMap = clients
  .map((client) => {
    if (client === "issou") return `<h1>${client}</h1>`;
    return `<p>${client}</p>`;
  })
  .join("");

// console.log(clientsMap);

clientUl.innerHTML = clientsMap;
////////////////////////////////////////
const ching = document.querySelector(".ching");
const listeChing = ["kahn", "kev", "celine", "elodie", "iley", "kk"];

const chingHTML = listeChing
  .map((membre) => {
    if (membre === "kahn" || membre === "iley")
      return `<li class="blue">${membre}</li>`;
    if (membre === "elodie") return `<li class="yellow">${membre}</li>`;
    return `<li class="red">${membre}</li>`;
  })
  .join("");

// console.log(chingHTML);

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  ching.innerHTML = chingHTML;
});
