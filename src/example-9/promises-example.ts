// Create a new Promise that resolves with a string
let promise = new Promise<string>((resolve, reject) => {
  // Simulate an asynchronous operation using setTimeout
  setTimeout(() => {
    // Randomly decide whether to resolve or reject the promise
    let success = Math.random() > 0.5;
    if (success) {
      resolve("Promise resolved"); // Resolve the promise if successful
    } else {
      reject("Promise rejected"); // Reject the promise if not successful
    }
  }, 2000); // Wait for 2 seconds before deciding
});

// Use the promise
promise
  .then(value => {
    console.log(value); // Log the resolved value if the promise is resolved
    return "Next step"; // Return a new value to chain another promise
  })
  .then(nextValue => {
    console.log("Next step value: " + nextValue); // Log the value from the previous .then()
  })
  .catch(error => {
    console.error(error); // Log the error if the promise is rejected
  });


/**
* A Few Benefits:
    * Improved Readability: Promises make asynchronous code easier to read and understand compared to traditional callback-based approaches.

    * Error Handling: They provide a structured way to handle errors using .catch(), making debugging simpler.

    * Chaining: Promises allow chaining of multiple asynchronous operations, ensuring tasks are performed in a specific order.
*/