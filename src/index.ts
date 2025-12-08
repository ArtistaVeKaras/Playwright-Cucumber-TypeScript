import { exec } from 'child_process';

// Define a common command string for running cucumber tests
const common = `./src/features/*.feature \
--require-module ts-node/register \
--require src/step-definitions/**/**/*.ts \
--require src/utils/cucumber-timeout.ts \
-f json:reports/cucumber-report.json \
--format html:reports/cucumber-report.html \
--tags "not @ignore" \
--format progress-bar --format @cucumber/pretty-formatter`

// Define an interface for the profiles object
interface ProfilesCommands {
    [key: string]: string;
}

// Define a command strigns for different test profiles
const profiles: ProfilesCommands = {
    smoke: `${common} --tags "@smoke"`,
    regression: `${common} --tags "@regression"`,
    login: `${common} --tags "@login"`,
    contactUs: `${common} --tags "@contact-us"`,
};

// Get the third command line argument to determine which profile to use
const profile = process.argv[2];

// Construct the command string based on the selected profile
let command = `npx cucumber-js ${profiles[profile as 'smoke' | 'regression' | 'login' | 'contactUs']}`;

// Print the constructed command    // Default to 'all' profile
console.log(`Running command: ${command}`);


// Execute the constructed command
exec(command, { encoding: 'utf-8' }, (error: Error | null, stdout: string) => {
    console.log(stdout);
    if (error) {
        throw new Error(`Some automation have failed: ${error.message}`);
    }
});