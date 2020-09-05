const critere = "age";
const age = 23;

const obj = {
  name: "tony",
  [critere]: age,
};

console.log(obj);

const obj2 = new Object(obj);
console.log(obj2);
console.log(obj === obj2);

//  Learn Constructor

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

console.log(Tony.disBonjour());
console.log(Titi.disBonjour());
console.log(Lara.disBonjour());

// Another example

class Cigarettes {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
  inflation(augmentation) {
    return (this.price = this.price + augmentation);
  }
  achat(packetSold) {
    return (this.stock = this.stock - packetSold);
  }
}

const Malboro = new Cigarettes("malboro", 10, 25);

Malboro.inflation(3);
Malboro.achat(10);
console.log(Malboro);
