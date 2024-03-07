const fs = require('fs');
const http = require('http');
const url = require('url'); 


///////////------SERVER------///////////

//createServer() will accept a callback functionv :) (request, responce) => {
    // Work
// }

// Creating a Srever :) 
const server = http.createServer((req, res) => {
    const pathName = req.url;

    if(pathName === '/' || pathName === '/overview'){
        res.end('This is OVERVIEW:)');
    }else if(pathName === '/product'){
        res.end('This is  PRODUCT:)');
    }else{ 
        // console.log('404 not found');
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello Worlds'
        });
        res.end('<h1>Page not Found (:</h1>');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listing to request on port 8000');
});