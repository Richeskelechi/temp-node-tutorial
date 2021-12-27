const EventEmitter = require('events');

const customerEmitter = new EventEmitter();

customerEmitter.on('response', () => {
    console.log(`Data Received`);
})

customerEmitter.on('response', () => {
    console.log(`Data Received with love`);
})
customerEmitter.emit('response')