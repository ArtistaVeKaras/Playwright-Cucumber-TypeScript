// Example of if-else statement in TypeScript
let myage: number = 15;
if (myage >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

// A simple loop example
for (let i: number = 0; i < 5; i++) {
    console.log(`Iteration number: ${i}`);
} 

// Function to check if a number is positive, negative, or zero
function checkSign(num: number): string {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
console.log(checkSign(10));  // Output: Positive
console.log(checkSign(-5));