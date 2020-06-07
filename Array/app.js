//  MAP method

const clientUl = document.querySelector(".clients");

const clients = ["issou", "zoulman", "eric", "kousieng", "caca"];

const capitainClient = clients.map((client) => {
  return `${client} capitain`;
});

// const clientsMap = clients
//   .map((client) => {
//     if (client === "issou") return `<h1>${client}</h1>`;
//     return `<p>${client}</p>`;
//   })
//   .join("");

// JAMAIS INNERHTML
// clientUl.innerHTML = clientsMap;

clients.forEach(function (client) {
  const p = document.createElement("p");
  p.innerText = `client : ${client}`;
  clientUl.appendChild(p);
});

////////////////////////////////////////
const chingUl = document.querySelector(".ching");
const listeChing = ["kahn", "kev", "celine", "elodie", "iley"];

// console.log(chingHTML);

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  if (chingUl.childNodes.length > 0) {
    return;
  }
  listeChing.forEach(function (ching) {
    const li = document.createElement("li");
    li.innerText = `${ching} ching`;
    chingUl.appendChild(li);
  });
});
