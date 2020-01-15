   
   /*
   Npm  Node package manager

   podemos ingresar a la pagina principal desde google NPM hay podremos encontrar modulos ya desarrollados de 
   diferentes programadores, es una herramienta de linea de comandos, cualquier cosa que pensemos crear 
   posiblemente ya esta creado y lo podrmos utilizar.  

   Como añadir NPM a nuestros proectos,
   
   Ejercicio:  Calcular los dias que un usuario realiza ejercicio desde una fecha determinada, hay que tener
   en cuenta que esta el año biciesto
   */

   //var start = new Date(2021, 00, 01);    // nos arroja un numero completo
   //var end = new Date(2021, 00, 18);
   
   var start = new Date(2021, 02, 01);    // nos arroja un numero con parte decimal por que le año es biciesto
   var end = new Date(2021, 03, 01);
   
   console.log(start);
   

   var miliSegundosDia = 24 * 60 * 60 * 1000;
   console.log(miliSegundosDia);
   
   var resultado = (end - start)/miliSegundosDia;
   console.log(resultado);
  
   /*
   Este ejercicio nos debia traer un numero con caracteres decimales, para que nos solciones el problema 
   que queremos debemos buscar una libreria de NPM. Vamos a la pagina

   en la pagina de NPM esta el paso a paso para la instalacion.

  npm -v   nos muestra la version de NPM, este es instalado con la instalacion de NodeJS 
  instalamos un modulo de NPM 
  npm install d3-time
  enseguida procedemos a utilizarlo
  */

   const d3 = require('d3-time')               // Importamos el modulo de NodeJS requerido para la soucion del ejercicio este modulo se puede
                                               // revisar dade la pagina de NPM hay muestra como utilizarlo
   resultado = d3.timeDay.count(start, end);   

   console.log(resultado);
   
   /* 
   Packet.json 
   Como modificar el metadata de nuestro proyecto, con la informacion de autor etc..
   digitamos el comando   npm init nos va solicitar la informacion del packat.json
   
   -->  Dependencias packet.json
   Las dependencias de nuestro packat.json son las rutas de todos los modulos que hayamos instalado en nuestro 
   proyecto, esto sirve si en algun momento queremos compartir nuestro proyecto, solo con el packat.json y 
   ejecutando npm install, nos instalara todos los modulos traidos de  NPM. 
   Ejecutando el comando mencionado nos debe crear la carpeta de node_modulos de las dependencia que tengamos en el packet.json
    npm install 
   

    --> Scripts  packat.json
    Nos permite configurar el archivo con el cual vamos a ejecutar nuestro proyecto
    Ejemplo: 
     "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"                                --> implementada
     },

     Asi podremos configurar como inicializar nuestra aplicacion.


     -->  Que es una API
     Interfaz de programacion de aplicaciones, basicamente es algo que permite comunicar a una pieza de software con
     otra pieza de software, hay muchas clases de API, facebook, google. la mas utilizada y la que veremos en este curso es
     la API rest. 

     -->  API Rest
     Interfaz de programacion de aplicaciones, Transferencia de estado de representacion, como funciona el cliente hace una 
     llamada al servidor, el servidor procesa esa llamada y devuelve datos al cliente atraves del protocolo HTTP.
     
     El protocolo de transferencia de Hiper texto HTTP es el protocolo de comunicacion que nos permite la transferencia de 
     informacion de la word withe web.  

     Se caracteriza por ser cliente servidor, son sin estado, independientes, es cacheable es decir debe tener almacenamiento cache.
     El servidor puede tener tantas capas como queramos.
     las operaciones mas importantes que nos permite son GET, post, PUT,  DELETE
     
     
     --> JSON
     Es un formato de texto ligero para el intercambio de datos, es mucho mas facil de escribir que el XML
     JSON formated   --> se busca por google es una pagina web que le da formato a la informacion JSON.

     JSON PRIMITIVOS
        En los datos primitivos de un JSON podemos encontrar los siguientes:
        --> Numero
        --> Cadena de texto
        --> Boleanos
        --> Null

    JSON Clave valor
    Siempre debe contener una clave y un valor
        "clave": "valor"
        "edad": "30"
        "nombre": "alberto"
        "trabajando": "true"
        "ciudad": "null"
 
     JSON Array
     Representan una lista ordenada de 0 o mas valores.
     JSON permite formar array muy facil
        ["Java", "Kotlin", "Go"]
        "lenguajes": ["Java", "Kotlin", "Go"]

     JSON Objetos
     lOS objetos pueden estar compuestos por arrays, informacion clave valor, JSON primitivos.
        {
            "id": "121212",
            "name": "alberto",
            "datos_profesionales": {
                "lenguajes": 
                [
                    "Java", "Kotlin", "Go"
                ]
            } 
        },

    son colecciones no ordenadas, estan separadas por coma y puestos entre llaves.  

    -->  BSON
    Es el formato de intercambio de datos usado principalmente para almacenar y transferir datos en MongoDB, en una presentacion binaria de JSON.
    La razon por la que se utiliza BSON para guardar los documentos en MongoDB, es por la JSON solo tiene 6 tipos y BSON ofrece mas como por ejemplo para guardar
    la fecha, expresiones reulares, binarios etc. 
    
    --> Convertir de JSON a BSON.
    Extended JSON, se utiliza para transformar los datos de JSON a BSON y de BSON a JSON, para preservar la informacion del tippo mogoDB agrega las siguientes extensiones
    Stric Mode (modo stricto), Shell Mode.
    MongoDB almacena documentos BSON en colecciones y las colecciones en base de datos. 

    -->   HTTP
    El protocolo de transferencia de Hyper texto ha sido diseñado para habilitar la comunicacion entre 
    clientes y servidores, HTTP funciona con un protocolo de solicitud respuesta entre el cliente y servidores,
    es decir el cliente hace una solicitud y el servidor le responde.
    Ejemplo
    Un cliente que ouede ser una APP realiza una solicitud HTTP al servidor el servidor la procesa y le devuelve 
    una respuesta al cliente, la respuesta contiene informacion de estado sobre la solicitud y tambien puede contener 
    contenido.
    
    -->  Metodo GET
    Se uza para una solicitud de datos de un recurso especifico, los parametros de consulta se envian en la propia URL 
    de la solicitud, son enviados en formato nombre valor, hay que tener en cuenta de no enviar datos confidenciales,
    como contraseñas, solo se utiliza para solicitud de datos y no para modificar datos dentro de un servidor.
    
    --> Metodo POST
    Se utiliza para enviar datos a un servidor, para crear o actualizar un recurso, cuando utilizamos post los datos enviados 
    al servidor se almacenan en el cuerpo de la solicitud HTTP a diferencia de GET que van en la URL.
    
    --> Metodo PUT 
    Se utiliza para enviar datos, para crear un recurso o actualizar un recurso, la diferencia es que son IDE potentes, 
    quiere decir que cuando se hacen varias solicitudes PUT el resultado siempre sera el mismo, por el contrario con POST cada vez 
    que hacemos una solicitus se creara el recurso varias veces, es decir enviamos una solicitud POST pues lo que va hacer crear un recurso
    o editar ese recurso mientras que en PUT siempre va hacer la misma operacion editar o crear por que se les pasa todo viene especifico
    en la URL.
    
    en PUT debes conocer la URL de destino que se va a modificar, mientras que con POST puedes conocer la URL o no y los datos que se le envian 
    en el body hagan lo que tengan que hacer. 
    
    --> Metodo DELETE
    Es el que se va autilizar para borrar un recurso especifico de nuestro servidor.

    --> Metodo HEAD
    Es identico al metodo GET pero con una peculiaridad no nos envia el cuerpo de la respuesta, 
    Ejemplo:
    Si el metodo GET nos envia una lista de profesores HEAD nos devuelve la misma respuesta pero sin la lista, el uso mas comun es hacer descargar
    un archivo pesado hacemos primero una solicitud HEAD, verificamos que la respuesta es la esperada que no a habido ningun problema en el servidor 
    que a encontrado el recurso especifico, y luego de que sabemos que ya esta todo OK realizamos la peticion GET, en el caso de que no lo encon
    traramos en el servidor HEAD nos responderia que el fichero no existe y por tanto no pasariamos a realizar la peticion.

    -->  Codigos de respuesta.
    codigos de respuesta o de retorno viene hacer un numero que indica que ha pasado con la peticion que acabamos de hacer a nuestro servidor
    empiezan desde    100, 200, 300, 400, 500

    100, 101, vienen siendo respiuestas informaticas, viene hacer que la peticion ha sido recivida correctamente por el servidor y que la esta procesando.
    200, son los importantes indican que son respuesta correctas, indica que la peticion ha sido recibida por el servido la ha procesado y lo que va a devolver
         es una respuesta correcta.
    204 No Content  -->  La petición se ha completado con éxito pero su respuesta no tiene ningún contenido, aunque los encabezados pueden ser útiles. 
        El agente de usuario puede actualizar sus encabezados en caché para este recurso con los nuevos valores
    300, Indican que son respuestas de redireccion, que el cliente va a necesitar realizar una accion adicional antes de acabar con su peticion.
         como un login
    400, errores causados por el cliente, indican cuando habido un error en el procesamiento de una peticion, acausa de que el cliente ha echo algo mal,
         esta solicitando un recurso que no existe, una URL que no existe al final el servidor lo procesa y envia ese codigo de error.
    500, Errores debido al servidor, que a fallado el servidor al momenot de realizar la solicitud.
    
    --> Cabeceras HTTP
    Estas cabeceras son fundamentales para proporcionar informacion al cliente esencial sobre la transaccion que estamos realizando en curso, cada cabecera tiene
    es siempre una misma estructura especifica por un nombre de cabecera seguido por dos puntos, es decir que tiene una estructura por la cual se forman  y siempre
    tienen la misma forma primero un nombre seguido de dos puntos espacio en blanco  y un valor de dicha cabecera, siempre va seguido de un salto de linea, para dar
    cierre a la cabecera.

    Sirve para añadir mas funcionalidades a la peticion, hay cabeceras para configurar el idioma que va ser aceptado en la aplicacion, tambien para el tipo de 
    servidor, tambien la longitud del mensaje se puede especificar el tamaño de la cabecera si esta exede el tamaño genera algun tipo de error, se puede identificar 
    si va tener cookies, tambien se utiliza para la autorizacion y autenticacion.
    
    -->  EXPRESS
    Es un framework que nos encontramos en NodeJS que nos sirve para crear aplicaciones web en menos tiempo mas robustas y que ha sido especialmente diseñado, con 
    funcionalidad de enutamiento, gestionar sesiones cookies y muchas cosas mas, es un framework poco pesado, esta basado en el modulo HTTP de NodeJS, nos permite crear
    APIs robustas.

    Este es un módulo Node.js disponible a través del registro npm. Antes de instalar, descargar e instalar Node.js. Se requiere Node.js 0.10 o superior.
    La instalación se realiza con el npm install comand:

        Caracteristicas
            Enrutamiento robusto
            Centrarse en el alto rendimiento
            Cobertura de prueba súper alta
            Ayudantes HTTP (redirección, almacenamiento en caché, etc.)
            Sistema de visualización compatible con más de 14 motores de plantillas
            Negociación de contenido
            Ejecutable para generar aplicaciones rápidamente

    --> Creacion proyecto Express
        
        1.  Ejecutamos el codigo npm init    --  para condigurar el packet JSON
        2.  Instalamos express ejecutamos  npm install express
        3. Como gestionar las peticiones GET, PUT, DELETE. 

        const express = require('express')                      //  Importamos el modulos Express
        const app = express()                                   
 
        app.get('/', function (req, res) {                      //   '/'  Definimos la ruta donde queremos escribir el mensaje
        res.send('Hello World')                                //   res.send  envia el mensaje 'Hello Word al documento'
        })
 
        app.get('/api/cards/list', function (req, res) {       //  Creamos otra interfaz donde podemos consultar la informacion de las marcas por                
        res.send(['BMW', 'AUDI A3', 'Mercedes clase A'])           medio de la ruta   '/api/cards/list'                  
        })

        app.listen(3000, () => {                                        Puerto de nuestro servidor donde enviamos un mensaje al momento de que sabemos que
            console.log('Escuchando servidor en localhost: 3000');      se ejecuta el servidor
        })


        4. Instalacion NODEMON desde NPM
           Nodemon es un complemento de NodeJS, que nos permite reiniciar automaticamente el servidor cada vez que ve cambios en el servidor no hay necesidad 
           de estar presionando ctrl c si no nodemon nos actualiza los cambios automaticamente es igual al servidor de Angular

          npm install -g nodemon
          se ejecuta    nodemon index.js

        5. Configuracion de variable de entorno PORT
           Nos permite crear una nueva variable de entorno
           
            const port = process.env.PORT || 3000                      //  Declaramos el puerto y lo asignamos a una variable CONST
            
            app.listen(port, () => {                                   //  cambiamos el numero por la variable
            console.log('Escuchando servidor en localhost: 3000');
            })     
        
        6.  

    -->   Postman  
    Postman es una herramienta que se utiliza, sobre todo, para el testing de API REST, aunque también admite otras funcionalidades que se salen 
    de lo que engloba el testing de este tipo de sistemas.
    Gracias a esta herramienta, además de testear, consumir y depurar API REST, podremos monitorizarlas, escribir pruebas automatizadas para ellas, 
    documentarlas, mockearlas, simularlas, etc
    Quizás sea una de las herramientas más utilizadas para hacer testing exploratorio de este tipo de sistemas. Puede que no sea la mejor forma de 
    escribir pruebas automatizada, pero sin duda es una de las más favorables para equipos con poca experiencia en programación, y sobre todo para hacer 
    testing de todo tipo en general de API REST.
    Es importante destacar también que, aunque no sea una de las herramientas más famosas para documentar API REST, genera una documentación bastante 
    interesante y bastante atractiva, con ejemplos y snippets de código, de forma que hace que sea muy fácil de entender cómo funciona una API determinada.
    Aprende las bases del testing y cómo aplicarlas para probar APIs REST con Postman, uno de los clientes más utilizados actualmente con el que podrás 
    consumir, probar, documentar e incluso simular APIs REST.
    
    Nos ayuda a testear nuestras APIs, cuando estamos en el Backend o en el Front End. Se pueden testear nuestras APIs o la de los demas, 
    
    -->   Metodo Post

    Debemos agregar    app.use(express.json())   nos ayuda a parsear

    -->   NPM validator
    Como se habia comentado antes ya hay mucho codigo desarrollado en NPM que nos sirve para el desarrollo de nuestras diferentes funciones, como lo son 
    las de validar informacion que ingresa un usuario, cuando realiza una solicitud POST, nos ayuda a validar que el usuario haya enviado vien la informacion,
    como en campos de correo, texto, campos que no vayan vacion. para esto vamos a NPM y buscamos expresss validator.

    https://express-validator.github.io/docs/index.html    esta es la pagina oficial donde podemos encontrar la explicacion al problema de validacion.


    --> Middleware
    Son bloques de codigo que se ejecutan entre la peticion que hace el usuario, tienen acceso al Objeto Request, al objeto Response y al objeto next que
    sirve para identificar cual es la funcion siguiente a ejecutar. Pueden ejecutar cualquier tipo de codigo.

    --> Middleware Express     MORGAN 
    vamos a utilizar un middleware de la pagina principal de express es Morgan
    Middleware de registrador de solicitudes HTTP para node.js
    
    1. primero debemos instalarlo    -->   npm install morgan
    2. lo importamos                 -->   const morgan = require('morgan')
    3. lo usamos                     -->   app.use(morgan('tiny'))  
    4. nos muestra en consola        -->   GET /api/cars/ 200 168 - 8.593 ms      informacion del tipo de peticino y la ruta URL                 


    -->  Asincronia
    La idea en la asincronia es trabajar varias peticiones donde se realiza una peticion a la base de datos y asincronamente esta se ejecuta,
    es la accion que no se realiza en la misma linea de tiempo se pueden manejar por los colback, promesas, funciones async y away, los colback fueron una de las
    primeras formas para manejar promesas.

    --> Promesa
    Una promesa es un objeto que representa la terminacion o el fracaso de una operacion asincrona, tiene dos estados pendit pendiente, o risolve o reject (es cuando
    a sido resuelta la promesa).
    ejemplo:
    Estamos realizando una peticion a la base de datos por medio del id o una lista decoches y en ese momento que se inicia estara en estado pendit la promesa y
    una ves que ha accedido al documento que ha encontrado lo solicitado, que lo esta enviando pasa a risolve si no encuentra nada envia  reject informandonos 
    que hay algo mal.
    
      como crear una promesa

      new Promise((resolve, reject) => {                               // resolve si la promesa ha sido resuelta o reject si no ha encontrado nada 
        setTimeout(() => {
            resolve({id: 1, model: 'Leon', company: 'seat'})
            reject(new Error('Se ha producido un error al leer la BD'))
        }, 4000)                              
    })    
    
    -->  Suprimiendo Warnings
         Los Warnings son los errores que nos aparecen en la consola, hay que tratar de dejarla siempre limpia.

    --> Transactions in Mongoose 
        ejecutan multiples operaciones y si una falla no se guarda nada
   */


