const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    alert("Attention c'est titi");
  });
});
