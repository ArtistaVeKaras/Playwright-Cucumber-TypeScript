// Asimple objet example
// An object is a simple collection of properties
let student = {
    name: "Alice",
    age: 20,
    isEnrolled: true
}
console.log(student.name + " " + student.age + " " + student.isEnrolled);


// A simple class example
// A class is a blueprint for creating objects with specific properties and methods
class Car {
    constructor(public model: string, public make: string, public year: number) {
        
    }    
}

let myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.model + " " + myCar.make + " " + myCar.year);