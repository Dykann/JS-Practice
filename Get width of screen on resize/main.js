const btnActivate = document.querySelector(".activate");
const btnDeactivate = document.querySelector(".deactivate");

let isActivated = false;

btnActivate.addEventListener("click", function () {
  if (isActivated === true) return;
  console.log("Active");
  window.addEventListener("resize", getWindowWidth);
  isActivated = true;
});

btnDeactivate.addEventListener("click", function () {
  if (isActivated === false) return;
  console.log("Not active");
  window.removeEventListener("resize", getWindowWidth);
  isActivated = false;
});

function getWindowWidth() {
  console.log(window.innerWidth);
}
