const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/students-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log('Connection is successfully')
}).catch((error) => {
    console.log(error)
});