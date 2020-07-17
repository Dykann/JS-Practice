const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  document.body.classList.toggle("backgroundColor");
  btn.classList.toggle("btn-style");
  btn.classList.toggle("transition");
});
