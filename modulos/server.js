const http = require('http')            

/*
const server = http.createServer(); 

server.on('conection', (socket) => {             
  console.log('Nueva conexion detectada')
})

server.listen(5000);
console.log('Escuchando en el servidor: 5000');
server.emit('conection');
*/


//  Creacion de servidor con request y response

/*
const server = http.createServer((req, resp) => {
    if (req.url === '/' ) {                        //  Significa que ingreso a la Home pagina principal
        resp.write('Hola mundo');
        resp.write('desde NodeJs');      
        resp.end();
    }

    if (req.url === '/coches' ) {              // nos permite tener acceso a una pagina /coches
        resp.write('Bienbenido a la pagina');
        resp.write('coches');      
        resp.end();
    }

}); 
server.listen(5000);
console.log('Escuchando en el servidor: 5000');
*/

/* Codigos de estados de respuestas

200 La solicitud a tenido exito y se a creado un nuevo recurso en el servidor 

404 servidor no pudo encontrar el contenido (Not found)
401  Es necesario autenticar para acceder

*/

const server = http.createServer((req, resp) => {
    resp.writeHead(200, {'Content-Type': 'text/html'});       // Permite codificar codigo HTML
    resp.write('<h1> Hola a todos </h1>')                     // Escribe codigo con las etiquetas seleccionadas. 
    resp.write('<p> Mi web de coches </p>')
    resp.end()

}).listen(5000)
console.log('Escuchando: 5000');
