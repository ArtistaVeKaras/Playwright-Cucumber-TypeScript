// Part 1 -Basic Variables and Data Types in TypeScript
// Declaring variables with explicit types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];

console.log(isDone)
console.log(decimal)
console.log(color)
console.log(list)
console.log(tuple)

// Enum type
enum Color { Red, Green, Blue }
let c: Color = Color.Green;
console.log(c)

// Part 2 - Arrays
// Declaring an array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(numbers.length)

// Part3: Var, Let, and Const
// 'var' can be redeclared and updated
var globalVar: string = "I am a fruit";
globalVar = "I am a vegetable";
console.log(globalVar)

// 'let' can be updated but not redeclared in the same scope
let blockVar: string = "I am a car";
blockVar = "I am a bike";
console.log(blockVar)