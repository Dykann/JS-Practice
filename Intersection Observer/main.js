const firstImg = document.querySelector("img");

function PageTransition() {
  firstImg.classList.add("active");
}

window.addEventListener("load", PageTransition);

const images = document.querySelectorAll(".img");

const options = {
  root: null,
  threshold: 0,
  rootMargin: "20px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}, options);

images.forEach((image) => {
  observer.observe(image);
});
