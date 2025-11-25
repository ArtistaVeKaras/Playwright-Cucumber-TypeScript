// import fs module
import { readFile } from 'fs';

// read the content of example.txt file
readFile('./src/example-2/example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err.message);
    } else {
        console.log('File content: ');
        console.log(data);
    }
});