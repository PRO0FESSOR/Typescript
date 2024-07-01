// The primitives: string, number , and boolean

//arrays 

const namew = Array<number>
const age = [1,2,3,4];

//Type Annotations on Variables

let myName:string = "Alice";

//Return Type Annotations
// specified type after function

function getage():number{
    return 45;
}

//anonymus functions 

const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});


//object types

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
  printCoord({ x: 3, y: 7 });


//optioal properties

function printName(obj: { first: string; last?: string }) {
    // ...
  }
  // Both OK
  printName({ first: "Bob" });
  printName({ first: "Alice", last: "Alisson" });

//union types
//can be used to add two or more type annotations

function printId(id: number | string) {
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

function prisntId(id: number | string) {
    if (typeof id === "string") {
      // In this branch, id is of type 'string'
      console.log(id.toUpperCase());
    } else {
      // Here, id is of type 'number'
      console.log(id);
    }
  }



// Type Aliases

// We’ve been using object types and union types by writing them directly in type annotations. This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.

// A type alias is exactly that - a name for any type. The syntax for a type alias is:



type Point = {
    x: number;
    y: number;
  };
   
  // Exactly the same as the earlier example
  function printCooord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  printCoord({ x: 100, y: 100 });


  type id = string | object;

  const data : id = {"id" :1};



//   Interfaces

//   An interface declaration is another way to name an object type:
  
  interface Poiant {
    x: number;
    y: number;
  }
   
  function printCaoord(pt: Poiant) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  printCaoord({ x: 100, y: 100 });



//Differences Between Type Aliases and Interfaces

// Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

// Type Assertions

// Sometimes you will have information about the type of a value that TypeScript can’t know about.

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

const myCansvas = <HTMLCanvasElement>document.getElementById("main_canvas");

// Literal Types

// In addition to the general types string and number, we can refer to specific strings and numbers in type positions.

// But by combining literals into unions, you can express a much more useful concept - for example, functions that only accept a certain set of known values:

function printText(s: string, alignment: "left" | "right" | "center"){
    // ...
  }
  printText("Hello, world", "left");
//   printText("G'day, mate", "centre");

//numerical literal types

function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
  }

interface sub{
    "width" : number;
}

//literal with non literal type
function calct(a:sub|80){
    //
}

calct({"width" : 20})
calct(80)
// calct(90);
// calct({"width":"acdc"})


// Literal Inference

// When you initialize a variable with an object, TypeScript assumes that the properties of that object might change values later. For example, if you wrote code like this:

// const obj = { counter: 0 };
// if (someCondition) {
//   obj.counter = 1;
// }


function system(naame:string,id:"abc"|"def"|"gkl"):void{
    //
}


const info = {"naame":"sidd","id":"abc"} as const


system(info.naame,info.id);




