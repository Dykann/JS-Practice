const inputBlur = document.querySelector("input[name=blur]");

function changeBlur(event) {
  return document.documentElement.style.setProperty(
    `--blur`,
    event.target.value / 10
  );
}

inputBlur.addEventListener("change", changeBlur);
inputBlur.addEventListener("mousemove", changeBlur);

const inputSpacing = document.querySelector("input[name=spacing]");

function changeSpacing(event) {
  return document.documentElement.style.setProperty(
    `--spacing`,
    event.target.value + "px"
  );
}

inputSpacing.addEventListener("change", changeSpacing);
inputSpacing.addEventListener("mousemove", changeSpacing);
