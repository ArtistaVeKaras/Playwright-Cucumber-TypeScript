console.log("Task 1 started");

// Simulate a time-consuming task asynchronously
setTimeout(() => {
    for (let i = 0; i < 100; i++) {
        console.log("Executing time-consuming task...");
    }
    console.log("Task 1 completed");
}, 2000); // 2000 milliseconds = 2 seconds

console.log("Task 2 started");
console.log("Task 2 completed");
