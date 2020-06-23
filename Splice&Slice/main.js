function nonMutatingSplice(cities) {
  return cities.splice(0, 5);
}

let inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];

console.log(nonMutatingSplice(inputCities));

// Difference between Splice/Slice

function nonMutatingSlice(cars) {
  return cars.slice(1, 5);
}

let inputCars = ["Bmw", "Mercedes", "Toyota", "Audi", "Tesla"];

console.log(nonMutatingSlice(inputCars));

// Action on button click

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  document.body.classList.toggle("backgroundColor");
  btn.classList.toggle("btn-style");
  btn.classList.toggle("transition");
});
