const EventEmitter = require('events');
const myEmitter = new EventEmitter();
function eventlist (eventName) {
    console.log(`Callback triggerd by event: ${eventName}`);
    myEmitter
}
['eventA', 'eventB', 'eventc'].forEach(event => {
    myEmitter.on(event, () => eventlist(event));
});
myEmitter.emit('eventB');
myEmitter.emit('eventA');