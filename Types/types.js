// The primitives: string, number , and boolean
//arrays 
var namew = (Array);
var age = [1, 2, 3, 4];
//Type Annotations on Variables
var myName = "Alice";
//Return Type Annotations
// specified type after function
function getage() {
    return 45;
}
//anonymus functions 
var names = ["Alice", "Bob", "Eve"];
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
// Contextual typing also applies to arrow functions
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
//object types
// The parameter's type annotation is an object type
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
//optioal properties
function printName(obj) {
    // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
//union types
//can be used to add two or more type annotations
function printId(id) {
    console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
//   printId({ myID: 22342 });
//working with union types only support method for both types else nothing
// function printId(id: number | string) {
//     console.log(id.toUpperCase());
//   Property 'toUpperCase' does not exist on type 'string | number'.
//     Property 'toUpperCase' does not exist on type 'number'.
//   }
//solution 
function prisntId(id) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log(id);
    }
}
// Exactly the same as the earlier example
function printCooord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
var data = { "id": 1 };
function printCaoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCaoord({ x: 100, y: 100 });
//Differences Between Type Aliases and Interfaces
// Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.
// Type Assertions
// Sometimes you will have information about the type of a value that TypeScript can’t know about.
var myCanvas = document.getElementById("main_canvas");
var myCansvas = document.getElementById("main_canvas");
// Literal Types
// In addition to the general types string and number, we can refer to specific strings and numbers in type positions.
// But by combining literals into unions, you can express a much more useful concept - for example, functions that only accept a certain set of known values:
function printText(s, alignment) {
    // ...
}
printText("Hello, world", "left");
//   printText("G'day, mate", "centre");
//numerical literal types
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
//literal with non literal type
function calct(a) {
    //
}
calct({ "width": 20 });
calct(80);
// calct(90);
// calct({"width":"acdc"})
// Literal Inference
// When you initialize a variable with an object, TypeScript assumes that the properties of that object might change values later. For example, if you wrote code like this:
// const obj = { counter: 0 };
// if (someCondition) {
//   obj.counter = 1;
// }
function system(naame, id) {
    //
}
var info = { "naame": "sidd", "id": "abc" };
system(info.naame, info.id);
