// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

const months = ["Jan", "March", "April", "June"];
console.log(months);

months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);

months.splice(4, 1, "May");
// replaces 1 element at index 4
console.log(months);

// The slice() method returns a copy of a part of an array into a new array object selected from start to end (end not included)
// where start and end represent the index of items in that array. The original array will not be modified.

const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals);

console.log(animals.slice(2));
// Keep everything in the array from the item 2 which is "camel" until the end ["camel","duck","elephant"]
console.log(animals.slice(2, 4));
// Keep everything in the array from the item 2 which is "camel" until the 4 item not included "elephant" ["camel","duck"]
console.log(animals.slice(1, 5));
// Keep everything in the array from the item 1 which is "ant" until the 5 item "elephant" ["ant","bison","camel","duck","elephant"]
console.log(animals);
// Proof that the original array hasn't been modified.
