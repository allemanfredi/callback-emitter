# callback-emitter


callback-emitter it allows to manage the communication through events implemented with callbacks

## import

```javascript
const { CallbackEmitter } = require('../index');
```

## emit

```javascript
CallbackEmitter.emit('event' , 'hello world');
```

## on

```javascript
CallbackEmitter.on('event' , console.log);
```
