
// Todos los EventEmitters emiten el evento 'newListener'cuando se agregan
// nuevos oyentes y 'removeListener'cuando se eliminan los oyentes existentes.

const EventEmitter = require('events');

const emitter = new EventEmitter();


// El eventEmitter.on()método se utiliza para registrar oyentes (emite evento), mientras que 
// el eventEmitter.emit()método se utiliza para desencadenar el evento.

emitter.on('event', function(){
    console.log('Un evento a ocurrido');
})

emitter.emit('event');

emitter.on('eventWithArgument', function(arg){
    console.log('Un evento con los siguientes argumentos a ocurrido:  ' + arg.nombre + ' ' + arg.cedula);
})

emitter.emit('eventWithArgument', {nombre: 'Diego Fernando Guiza', cedula: 1022981362});


//  Funciones flecha

emitter.on('eventArrow', (arg) => {
    console.log('Un evento FLECHA con los siguientes argumentos a ocurrido:  ' + arg.nombre + ' ' + arg.cedula);
})

emitter.emit('eventArrow', {nombre: 'Diego Fernando Guiza', cedula: 1022981362});

