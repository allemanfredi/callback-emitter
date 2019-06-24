
const { CallbackEmitter } = require('../index');

CallbackEmitter.on('event' , console.log);

CallbackEmitter.emit('event' , 'hello world');