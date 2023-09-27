const fs = require('fs');
const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    // fs.readFile('input.txt', (err, data) => {
    //     if (err) return console.error(err);
    //     res.end(data.toString());
    // });
    const rstream = fs.createReadStream('input.txt');
    rstream.pipe(res)

    rstream.on('error', (error) => {
        res.end('file not found');
    })

    // rstream.on('data', (chunkdata) => {
    //     res.write(chunkdata);
    // });

    // rstream.on('end', () => {
    //     res.end();
    // });
    // rstream.on('error', (error) => {
    //     res.end('file not found');
    // })

});
server.listen(8000, "127.0.0.1");