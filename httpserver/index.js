
const http = require('http');
const fs = require('fs')
const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url == '/') {
        res.end('hello nabeel are you there?');
    } else if (req.url == '/contact') {
        res.end('hello contact us?');
    }
    else if (req.url == '/about') {
        res.writeHead(200, { "Content-type": "text/html" })
        res.end('hello about us?');
    }
    else if (req.url == '/userapi') {
        fs.readFile(`${__dirname}/UserApi/userapi.json`, 'utf-8', (error, data) => {
            console.log(data);
            const obj = JSON.parse(data);
            console.log(obj[0].address[1]);
            res.end(data);
        })


    }
    else {
        res.writeHead(404, { "Content-type": "text/html" })
        res.end('<h1>404 error page</h1>');
    }

})
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to the port no 8000')
}); 