const personName = "Aleksandre";
const surname = "Jelia";
var age = 16;
var height = 175;
const eyeColor = `Brown`;
var isEighteenOrNot = false;

console.log("es aris " + personName + " " + surname + " " + age + " wlis");
console.log(`me var ${personName} ${surname} ${age} wlis`);
console.log(5 + "5");
console.log(personName);
console.log(surname);
console.log(age);
console.log(height);
console.log(eyeColor);

var cars1 = [
  "Mercedes",
  "Dodge",
  "Toyota",
  "Mercedes",
  "Dodge",
  "Toyota",
  "Mercedes",
  "Dodge",
  "Toyota",
  "Mercedes",
  "Dodge",
  "Toyota",
  "Mercedes",
  "Dodge",
  "Toyota",
  "Mercedes",
  "Dodge",
  "Toyota",
  "Mercedes",
  "Dodge",
  "Toyota",
  "Mercedes",
  "Dodge",
  "Toyota",
];

let car1 = "Mercedes";
let car2 = "Dodge";
let car3 = "Toyota";

var cars2 = [car1, car2, car3, 1, 2, 3];

console.log(cars1);
console.log(cars2);
console.log(cars1[5]);
console.log(cars2[4]);

cars2[3] = 5;

console.log(cars2);

var cars3 = [];

cars3[0] = "gio";
cars3[1] = "nika";
cars3[2] = "gio";

console.log(cars3);

console.log(cars2.toString());

cars2.length;

const tqveniLeqtori = {
  name: "Aleksandre",
  surname: "Jelia",
  age: 16,
  height: 190,
  isEighteen: false,
  experience: ["js", "html", "css"],
  dzili: function sleep() {
    console.log("zzz");
  },
};

console.log(tqveniLeqtori.experience[1]);
tqveniLeqtori.name;
tqveniLeqtori.dzili();

const arr = [0, 1, 2];
arr.sort();
arr.filter();
arr.concat();
arr.length();
arr.splice();
arr.push();
arr.pop();
arr.unshift();
arr.shift();

arr.forEach();
arr.map();