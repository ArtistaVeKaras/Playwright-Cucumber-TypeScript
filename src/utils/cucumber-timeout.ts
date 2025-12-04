import { setDefaultTimeout } from "@cucumber/cucumber";

// If too low this will affect playwright timeouts
// Example exception: Error: functions timed out, ensure the promise resolves within 20000 miliseconds
setDefaultTimeout(60000);