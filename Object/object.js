const critere = "age";
const age = 23;

const obj = {
  name: "tony",
  [critere]: age,
};

const obj2 = new Object(obj);

// console.log(obj2);

class Khaov {
  constructor(name, gender = "male") {
    this.surname = "KHAOV";
    this.name = name;
    this.gender = gender;
  }

  disBonjour() {
    return `salut moi c'est ${this.name} ${this.surname}`;
  }
}

const Tony = new Khaov("Tony");
const Titi = new Khaov("Titi", "male");
const Lara = new Khaov("Lara", "dog");

////////////////////////

class Cigarettes {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
  achat(number = 1) {
    return (this.stock = this.stock - number);
  }
  inflation(augmentation = 10) {
    return (this.price = this.price + augmentation);
  }
}

console.log(Cigarettes);

const Malboro = new Cigarettes("malboro", 10, 25);
Malboro.achat(10);

Malboro.inflation(3);
console.log(Malboro);
