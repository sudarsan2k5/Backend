// import fs --> file system modele

// file read start
const fs = require('fs');
const textdata = fs.readFileSync('./text.txt', 'utf-8');
console.log(textdata);
// file read ends here

const textOut = `hello mansingh what is your name :) ${textdata}.\ Created on time ${Date.now()}`
fs.writeFileSync('./output.text', textOut);
console.log('File Written :)');