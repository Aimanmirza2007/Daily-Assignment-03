// //////////////////////////////////////////////// DAILY ASSIGNMENT 03///////////////////////////////////////////////

// EXAMPLE NO 01

class Rectangle {
  constructor(width, heigth) {
    this.width = width;

    this.heigth = heigth;
  }

  area() {
    return this.width * this.heigth;
  }
  peramiter() {
    return 2 + (this.width + this.heigth);
  }
}

let recResult = new Rectangle(15, 25);

console.log(` The area of Rectangle is :${recResult.area()}`);

console.log(`The peramiter of rectangle is : ${recResult.peramiter()}`);

class square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

let squResult = new square(4);

console.log(` The area of Rectangle is :${squResult.area()}`);

console.log(`The peramiter of rectangle is : ${squResult.peramiter()}`);

// EXAMPLE NO 02

class Car {
  constructor(make, model, year) {
    this.carMake = make;

    this.carModel = model;

    this.carYear = year;
  }

  getCarDetails() {
    return `Make: ${this.carMake}, Model: ${this.carModel}, Year: ${this.carYear}`;
  }
}

let carResult = new Car("Farari", "Purosangue SUV", 2020);

console.log(carResult.getCarDetails());

class ElectricCar extends Car {
  constructor(make, model, year, bettrylife) {
    super(make, model, year);

    this.betteryLife = bettrylife;
  }

  getBettryLife() {
    return `${super.getCarDetails()} and  Battery life: ${
      this.betteryLife
    } hours`;
  }
}

let ElectricCarResult = new ElectricCar("Farari", "Purosangue SUV", 2020, 15);

console.log(ElectricCarResult.getCarDetails());

console.log(ElectricCarResult.getBettryLife());

///LEXICAL SCOPING
//EXAMPLE NO 1

function multiplyBy(factor) {
  return function multiplication(val) {
    console.log(val * factor);
  };
}

const multiplyByTwo = multiplyBy(4);

console.log(multiplyByTwo(6));

//EXAMPLE NO 2

let FriendName = {
  list: "friend",

  names: ["Aiman", "Aisha", "Neha"],

  getFriends: function () {
    this.names.map(function (item) {
      // output  undefined :'Aiman' ,undefined: 'Aisha' ,undefined; 'Neha' undefine is liye aya ke is ko list nahi mil rahi because hum ne function ke andar map function run kiya h aik function mein to sahi h lakin function ke andar function banake hum is ko define karainge to wo get nahi karpayega

      console.log(this.list, item);
    });
  },
};

FriendName.getFriends();

//EXAMPLE NO 3
//SOLVE USING ARROW FUNCTION

let data = {
  list: "friend",

  names: ["Aiman", "Aisha", "Neha"], // output is  friend: Aiman ,  friend: Aisha, friend: Neha

  getFriends: function () {
    this.names.map((item) => {
      console.log(this.list, item);
    });
  },
};

data.getFriends();

//Rest operators
//EXAMPLE NO 1

function sum(a, ...number) {
  console.log(a, number);
}

sum(2, 5, 7, 9, 8);

//EXAMPLE NO 2

function string(...string) {
  return string.join(" ");
}

console.log(string("Hello", "World"));

//PROMISE IN JAVASCRIPT

let age = new Promise((res, rej) => {
  let age = 8;

  if (age >= 18) {
    res("you can vote");
  } else {
    rej("You can not vote");
  }
});

console.log(age);

age
  .then((item) => {
    console.log(item);
  })
  .catch((err) => {
    console.log(err);
  });

// //////////////////////////////////////////////// DAILY ASSIGNMENT 04///////////////////////////////////////////////
//GLOBAL FUNCTION
console.log(isFinite(7)); //true

console.log(isFinite("hello")); //false

console.log(isFinite(null)); //true

console.log(isNaN("10")); //false

console.log(isNaN("aiman")); //true

console.log(isNaN(9)); //false

//DESTRUCTURING OF OBJECT

const user = {
  id: 1,

  username: "alice",

  email: "alice@example.com",

  profile: {
    userage: 25,

    city: "Los Angeles",
  },

  active: true,
};

//  Use destructuring to extract the id, username, and active properties directly from the user object.

const { id, username, active } = user;

console.log(id, username, active);

//Extract the age and city from the nested profile object using destructuring.

const {
  profile: { userage, city = "London" },
} = user;
console.log(userage, city);

const colors = {
  color1: "red",
  color2: "green",
  color3: "blue",
  color4: "yellow",
};
const { color3, ...diffcolors } = colors;
console.log(color3, diffcolors);

//DESTRUCTURING OF ARRAY

//EXAMPLE NO 1
const numbers = [10, 20, 30, 40, 50];

const [first, second, ...rest] = numbers;

console.log(first, second);

console.log(rest);

//EXAMPLE NO 2
const employingName = ["John", "Doe", "Software Engineer", 25];
const [empName, lastName, jobtitle, empAge = 28] = employingName;

console.log(empAge);

//SPREAD OPERATORS
//EXAMPLE NO 1
const fruits = ["apple", "banana", "cherry"];
const vegetables = ["carrot", "potato", "broccoli"];

let food = [...fruits, ...vegetables];
console.log(food);

const newFood = ["spinach", ...food];
console.log(newFood);

// //////////////////////////////////////////////// DAILY ASSIGNMENT 05/////////////////////////////////////////////

//EXPONENTIAL OPERATORS
function calculate(base, exponenet) {
  return base ** exponenet;
}
console.log(calculate(2, 4)); //solve 2*2*2*2 = 16

let x = 3;
let n = -2;
let solve = x ** n; //  formula : x power -n = 1/x power n //solve:  3 power
//  -2 is equal to 1 or 1 / 3  power positive n means positive 2 so 3 * 3 = 9 so 1/9 = 0.1111111111111111

console.log(solve);

console.log(2 ** (4 ** 2)); //higher priority right hand side which is 4**2 means 4 * 4 = 16 then solve lefthand side which 2 ** 16 = 65536

// import Calculation,{multiply} from "./app.js";
// Calculation(2,3);
// multiply(3,5);

//Generators
function* steps() {
  yield "step 1 completed";

  console.log("hello");

  yield "step 2 completed";

  console.log("hey");

  yield "step 3 completed";

  console.log("happy😋");
}
let stp = steps();

function getSetps() {

  console.warn(stp.next());
}

function* printNum() {

  let i = 1;
  
  while (i <= 10) {

    yield i++;
    console.log(`2 x  ${i} = ${i * 2}`);
  }
}
let print = printNum();
console.log(print.next());
console.log(print.next());
console.log(print.next());
console.log(print.next());
console.log(print.next());
console.log(print.next());
console.log(print.next());
console.log(print.next());
console.log(print.next());
console.log(print.next());
