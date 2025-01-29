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
  
  age.then((item) => {
    console.log(item);
  }).catch((err)=>{
  console.log(err);
  
  })