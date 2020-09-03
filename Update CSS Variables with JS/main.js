const inputBlur = document.querySelector("input[name=blur]");

inputBlur.addEventListener("change", changeBlur);
inputBlur.addEventListener("mousemove", changeBlur);

function changeBlur(event) {
  return document.documentElement.style.setProperty(
    `--blur`,
    event.target.value / 10
  );
}

const inputSpacing = document.querySelector("input[name=spacing]");

inputSpacing.addEventListener("change", changeSpacing);
inputSpacing.addEventListener("mousemove", changeSpacing);

function changeSpacing(event) {
  return document.documentElement.style.setProperty(
    `--spacing`,
    event.target.value + "px"
  );
}
