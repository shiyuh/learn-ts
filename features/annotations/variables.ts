/* Type annotation */

// we are ever going to assign value of numbers to apple
let apple: number = 5;

let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built-in object
let now: Date = new Date();

// array
let colors: string[] = ['red', "pink"];
let myNumbers: number[] = [1, 2];

// classes
class Car {

}
let myCar: Car = new Car();

// object literal
let point: { x: number; y: number; } = {
  x: 10,
  y: 20
};

// function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use annotations
// 1) when a function returns the any type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json); // JSON.parse returns type any
console.log(coordinates);

// 2) when we declare a variable on one line and initialize it later
let words = ['red', 'green', 'yay'];
let found: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] == 'yay') {
    found = true;
  }
}

// 3) when we want a variable to have a type that cannot be inferred
// bad code, but for illustrative purpose
let numbers = [-12, 10, -1]
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
