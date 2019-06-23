
const { EventEmitter } = require('../index');

EventEmitter.on('event' , console.log);

EventEmitter.emit('event' , 'hello world');