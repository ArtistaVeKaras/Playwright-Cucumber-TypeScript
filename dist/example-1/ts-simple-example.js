let firstName = "John";
let age = 30;
console.log(`Hello, my name is ${firstName} and I am ${age} years old.`);
export {};
// //Enunm
// enum Color {
//     Red,
//     Green,
//     Blue
// }
// let c : Color = Color.Blue;
// console.log(`Selected color is: ${Color[c]}`);
// Common differences between JavaScript and TypeScript
// 1. Type Annotations - In TypeScript, you can specify the type of a variable, function parameter, or return type.
// JavaScript
// let name = "John";
// TypeScript
// let name: string = "John";
// 2. Interfaces - TypeScript allows you to define the structure of an object using an interface.
// JavaScript
// let person = {
//     name: "John",
//     age: 30
// };
// TypeScript
// interface Person {
//     name: string;
//     age: number;
// }
// let person: Person = {
//     name: "John",
//     age: 30
// };
// 3. Enums - TypeScript allows you to define enumerations, which are collections of related values.
// JavaScript
// const Color = {
//     Red: 0,
//     Green: 1,
//     Blue: 2
// };
// TypeScript
// enum Color {
//     Red,
//     Green,
//     Blue
// }
// 4. Classes - TypeScript allows you to define classes, which are similar to JavaScript classes but provide additional features such as access modifiers, constructors, and interfaces.
// JavaScript
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// TypeScript
// class Person {
//     private name: string;
//     private age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }
//# sourceMappingURL=ts-simple-example.js.map