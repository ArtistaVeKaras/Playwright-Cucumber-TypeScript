import { setDefaultTimeout } from "@cucumber/cucumber";
import dotenv from 'dotenv';
dotenv.config({ path : './env/.env' });

// If too low this will affect playwright timeouts
// Example exception: Error: functions timed out, ensure the promise resolves within 20000 milliseconds

const cucumberStepTimeout = parseInt(process.env.CUCUMBER_STEP_TIMEOUT || '60000'); // Default to 60 seconds
setDefaultTimeout(cucumberStepTimeout);