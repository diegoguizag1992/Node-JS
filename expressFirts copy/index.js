
const express = require('express')                           //  Importamos el framework Express que nos ayuda para la creacion de las Apis
const app = express()      
const car = require('./routes/cars')                         //  Importamos el modulo card que esta en la carpeta Routes para pode rutilizar las funciones
app.use(express.json())                                      //  cnovierte la peticion en formato JSON
app.use('/api/cars', car)                                    //  Declaramos la ruta como se va consultar la informacion

const port = process.env.PORT || 3000                        //  Declaramos el puerto y lo asignamos a una variable CONST

app.listen(port, () => {                                     //  cambiamos el numero 200 del puerto por la variable port
  console.log('Escuchando servidor en localhost:' + port);
})

// const date = require('./date');
// const morgan = require('morgan')                          //  Es un middleware que nos sirve para ver la informacion de la ruta, quel usuario esta solicitando 

//app.use(morgan('tiny'))                                    //  Morgan nos ayuda a visualizar en consola la informacion de la URL de la peticion 
                                                             //  que se realiza desde Postman
/*
  Ejemplo 1 Middleware

app.use(date.date)
*/

/*
//  Ejemplo 2 Middleware anidados

app.use('/api/cars/list', function (req, res, next){                   // Middleware Anidadas
  console.log('Request Type:', req.method);                            // Nos muestra informacion en consola del metodo utilizado          
  next();                                                             
})
*/

/*
app.get('/', function (req, res) {                             //   '/'  Definimos la ruta donde queremos escribir el mensaje
  res.send('Hello World')                                      //   res.send  envia el mensaje 'Hello Word al documento'
})
*/

