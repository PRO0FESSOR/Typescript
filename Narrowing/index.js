// Narrowing
// Narrowing in TypeScript refers to the process of refining the type of a variable within a certain scope. By using type guards and type assertions, TypeScript can more precisely understand the type of a variable, allowing you to write safer and more predictable code. Here are some common techniques for narrowing types in TypeScript:
// 1. Type Guards
// Type guards are expressions that check the type of a variable at runtime and inform TypeScript about the type within a specific block of code.
// typeof Type Guard
// Checks the type of a primitive value.
function printId(id) {
    if (typeof id === "string") {
        // id is of type string
        console.log(id.toUpperCase());
    }
    else {
        // id is of type number
        console.log(id);
    }
}
// instanceof Type Guard
// Checks if an object is an instance of a particular class.
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
        console.log("Woof!");
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () {
        console.log("Meow!");
    };
    return Cat;
}());
function makeNoise(animal) {
    if (animal instanceof Dog) {
        // animal is of type Dog
        animal.bark();
    }
    else {
        // animal is of type Cat
        animal.meow();
    }
}
function movve(animal) {
    if ("fly" in animal) {
        // animal is of type Bird
        animal.fly();
    }
    else {
        // animal is of type Fish
        animal.swim();
    }
}
function moveDirection(direction) {
    if (direction === "up") {
        // direction is "up"
        console.log("Moving up");
    }
    else if (direction === "down") {
        // direction is "down"
        console.log("Moving down");
    }
    else if (direction === "left") {
        // direction is "left"
        console.log("Moving left");
    }
    else {
        // direction is "right"
        console.log("Moving right");
    }
}
function isCarr(vehicle) {
    return vehicle.drive !== undefined;
}
function operaate(vehicle) {
    if (isCarr(vehicle)) {
        // TypeScript now knows that vehicle is of type Car
        vehicle.drive();
    }
    else {
        // TypeScript now knows that vehicle is of type Boat
        vehicle.sail();
    }
}
function draww(shape) {
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
