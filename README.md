# light-event-emitter


light-event-emitter it allows to manage the communication through events implemented with callbacks

## import

```javascript
const { EventEmitter } = require('../index');
```

## emit

```javascript
EventEmitter.emit('event' , 'hello world');
```

## on

```javascript
EventEmitter.on('event' , console.log);
```
