// Now lets say that for some reason in our application, we need to read a large text file from the file and then send to the client.


            /////---------SOLUTION 1---------/////////

// const fs = require('fs');
// const server = require('http').createServer();

// server.on('request', (req, res) => {
//     // Solution 1
//     fs.readFile('./index.text', (err, data) => {
//         if(err) console.log("Error");
//         res.end(data);
//     });
// });


            /////////----------SOLUTION 2--------///////
const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    const readable = fs.createReadStream('index.text');
    readable.on('data', (chunkData) => {
        res.write(chunkData);
    });
    readable.on('end', () =>{
        res.end()
    })
});

server.listen('8000', '127.0.0.1', () => {
    console.log("Listing.....");
});
