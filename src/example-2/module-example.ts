// import fs module
import { readFile } from 'fs';

// Function to read a file asynchronously
readFile('src/example-2/example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});