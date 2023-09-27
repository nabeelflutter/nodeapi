const express = require('express');
const app = express();
let PORT = 5000;
const sendMail = require('./controllers/sendMail.js')
app.get("/", (req, res) => {
    res.send('I am a nabeel');
});
app.get('/mail', sendMail)

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log('hi')

        });
    }
    catch (e) {
        console.log(e);
    }
}

start();