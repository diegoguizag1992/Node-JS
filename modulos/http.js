
//  Vamos a crear un servidor, es la forma en la que el cliente se comunica con el servidor,

const http = require('http')                      // importamos el modulo HTTP

const server = http.createServer();                 //  Creamos el servidor

//server.on('conection', (socket) => {                //  Creamos el evento (metodo de emitir)
  //  console.log('Nueva conexion detectada');
//})


//  Inicia el servidor HTTP escuchando conexiones. Este método es idéntico al server.listen() de net.Server.
server.listen(5000)                                 //  Definimos el puerto donde queremos que escuche el servidor
console.log('Escuchando en el servidor: 5000');
