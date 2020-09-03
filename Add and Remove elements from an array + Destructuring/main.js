const array1 = ["Julien", "Emmy", "Eden", "Lara"];
const array2 = ["Ambre", "Ayden", "Mystic"];
const voitures = ["Bmw", "Mercedes", "Toyota"];

const array3 = [array1, array2];
console.log(array3);

// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

const array4 = array1.concat(voitures, array2);
console.log(array4);

// The push() method adds new items to the end of an array, and returns the new length.

voitures.push("Tesla");
console.log(voitures);

// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

voitures.unshift("Clio");
console.log(voitures);

// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

console.log(voitures.shift());
console.log(voitures);

// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

console.log(voitures.pop());
console.log(voitures);

// Destructuring 1 : create a unique array with the other arrays when array6 will create one array within the other arrays

const array5 = [...array1, ...voitures, ...array2];
const array6 = [array1, voitures, array2];
console.log(array5);
console.log(array6);

// Another example of Destructuring

let a, b, rest;
[a, b] = [10, 20];
[a, b, ...rest] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log(a);
console.log(b);
console.log(rest);

// Spread operator vs array.concat()
// When the spread operator is used with a string "" it will seperate each character/letter one by one
// Concat unlike the spread operator will add the entirely thing as written

a = [1, 2, 3];
x = "hello";

console.log(a.concat(x));
console.log([...a, ...x]);
