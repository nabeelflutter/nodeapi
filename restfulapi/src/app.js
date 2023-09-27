const express = require('express');
require("./db/conn");
const HostelOwner = require('./models/hostel');
const router = require('./router/hostel')
const userrouter = require('./router/user');
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(router);
app.use(userrouter);
app.listen(PORT, () => {
    console.log(`connection is setup at ${PORT}`);
});