const EventEmitter = require('events');
const event = new EventEmitter();
event.on('NABEEL', (sts, msg) => {
    console.log(msg)
})
event.on('NABEEL', (sts, msg) => {
    console.log(sts)
})
event.emit('NABEEL', 200, 'ok');
