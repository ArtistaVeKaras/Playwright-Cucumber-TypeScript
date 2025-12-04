// This function simulates a simple asynchronous task using setTimeout
function simpleAsyncTask() {
    console.log("Task started...");

    // setTimeout is used to simulate an asynchronous operation
    setTimeout(() => {
        console.log("Task completed after 1 second");
    }, 2000); // 2000 milliseconds = 2 seconds

    console.log("Waiting for the task to complete...");
}

// Call the function
simpleAsyncTask();


/**
 * Explanation:
    Task Simulation: The setTimeout function simulates an asynchronous operation that completes after 2 seconds.

    Output: The program logs “Task started…” and “Waiting for the task to complete…” immediately, 
    then logs “Task completed after 2 seconds” after the delay.

    This example effectively demonstrates how asynchronous operations allow the program to continue running other tasks,
    while waiting for the asynchronous task to complete.

    Remeber: Asynchronous operations allow programs to perform other tasks while waiting for long-running operations to complete, improving efficiency and responsiveness. 
 */