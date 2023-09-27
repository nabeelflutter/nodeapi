const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello Nabeel');
});
app.get('/contact', (req, res) => {

    res.send([
        {
            id: 1,
            name: 'nabeel',
            hostel: [
                {
                    id: 1,
                    name: 'Ali'
                },
                {
                    id: 2,
                    name: 'Sajjad'
                },
            ]
        }
    ]);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})