// Narrowing

// Narrowing in TypeScript refers to the process of refining the type of a variable within a certain scope. By using type guards and type assertions, TypeScript can more precisely understand the type of a variable, allowing you to write safer and more predictable code. Here are some common techniques for narrowing types in TypeScript:


// 1. Type Guards

// Type guards are expressions that check the type of a variable at runtime and inform TypeScript about the type within a specific block of code.
// typeof Type Guard

// Checks the type of a primitive value.

function printId(id: number | string) {
    if (typeof id === "string") {
      // id is of type string
      console.log(id.toUpperCase());
    } else {
      // id is of type number
      console.log(id);
    }
  }


// instanceof Type Guard

// Checks if an object is an instance of a particular class.

class Dog {
    bark() {
      console.log("Woof!");
    }
  }
  
  class Cat {
    meow() {
      console.log("Meow!");
    }
  }
  
  function makeNoise(animal: Dog | Cat) {
    if (animal instanceof Dog) {
      // animal is of type Dog
      animal.bark();
    } else {
      // animal is of type Cat
      animal.meow();
    }
  }
  

//   2. in Type Guard

// Checks if an object has a specific property.

interface Bird {
    fly: () => void;
  }
  
  interface Fish {
    swim: () => void;
  }
  
  function movve(animal: Bird | Fish) {
    if ("fly" in animal) {
      // animal is of type Bird
      animal.fly();
    } else {
      // animal is of type Fish
      animal.swim();
    }
  }

//   3. Literal Type Guards

// Checks for specific literal values.
  
type Direction = "up" | "down" | "left" | "right";

function moveDirection(direction: Direction) {
  if (direction === "up") {
    // direction is "up"
    console.log("Moving up");
  } else if (direction === "down") {
    // direction is "down"
    console.log("Moving down");
  } else if (direction === "left") {
    // direction is "left"
    console.log("Moving left");
  } else {
    // direction is "right"
    console.log("Moving right");
  }
}


// 4. User-Defined Type Guards

// Custom functions that determine the type of a variable.
  

interface Car {
    drive: () => void;
  }
  
  interface Boat {
    sail: () => void;
  }
  
  function isCarr(vehicle: Car | Boat): vehicle is Car {
    return (vehicle as Car).drive !== undefined;
  }
  
  function operaate(vehicle: Car | Boat) {
    if (isCarr(vehicle)) {
      // TypeScript now knows that vehicle is of type Car
      vehicle.drive();
    } else {
      // TypeScript now knows that vehicle is of type Boat
      vehicle.sail();
    }
  }
  
  

//   5. Type Assertions

// Manually specify the type of a variable.

// let someValdue: any = "this is a string";
// let strLengdth: number = (someVadlue as string).length;


// 6. switch Statement

// A switch statement can also be used for narrowing.

type Shape = "circle" | "square" | "triangle";

function draww(shape: Shape) {
  switch (shape) {
    case "circle":
      // shape is "circle"
      console.log("Drawing a circle");
      break;
    case "square":
      // shape is "square"
      console.log("Drawing a square");
      break;
    case "triangle":
      // shape is "triangle"
      console.log("Drawing a triangle");
      break;
  }
}

