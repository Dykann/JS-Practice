const array1 = ["Julien", "Emmy", "Eden", "Lara"];
const array2 = ["Ambre", "Ayden", "Mystic"];
const voitures = ["bmw", "mercedes", "toyota"];

const array5 = [...array1, ...voitures, ...array2];

const array = [array1, array2];
const array6 = array1.concat(array2, voitures);

console.log(array5);
console.log(array6);
console.log(array);

// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
