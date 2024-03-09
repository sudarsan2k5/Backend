# Backend
It's time for backend 🔥.


# Introduction to Streams
### What is Sreams:-
Strams used to process (read and write) data pices by pices(chuks) without completing the whole read or write operation, and therefore without keeping all the data in memory.
> Ex:- `NETFLIX` `You Tube`
> 
When we read file using `Streams` we read part of the data, do something with it, then free our memory and repeat this untile the entire file has been processed.

👉 Perfect for handling large volume of data, for example `Videos`.

👉 More efficient data processing in terms of memory(no need to keep all data in  memory) and time (we don't have to wait until all the data is avaliable).

## `NODE.JS STREAMS FUNDAMENTALS`

➡️ In node there are `4` fundamentals tyoes of streams.
- Readable Streams
- Writable Sreams
- Duplex  Streams
- Transform Streams
  
🔴 *Readable Streams and Writable Sreams are most Important*

![image](https://github.com/sudarsan2k5/Backend/assets/108286640/f5004e00-6a77-4f14-919b-d4a8ee0568f2)

### `Streams in Practice`

* Q. Now lets say that for some reason in our application, we need to read a large text file from the file and then send to the client.

            SO HOW WOULD WE DO THAT 🤔❓.

✅ SOLUTION 1:- 


  ```javascript
    const fs = require('fs');
    const server = require('http').createServer();
    
    server.on('request', (req, res) => {
        // Solution 1
        fs.readFile('./index.text', (err, data) => {
            if(err) console.log("Error");
            res.end(data);
        });
    });
    
    server.listen('8000', '127.0.0.1', () => {
        console.log("Listing......");
    });
```
#  Hello
