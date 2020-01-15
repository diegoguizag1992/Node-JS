
// Peticiones Middeware

//Ejemplo numero 1

var date = function (req, res, next){                                          
    console.log('Time', Date.now());                                    // Estas peticiones se ejecutan al momento del usuario realizar cualquier peticion, un ejemplo
                                                                        // puede ser una solicitud GET desde Postman, hay ejecuta todo lo que hay dentro de la funcion
    next();                                                             // Para que esto funcione hay que tener siempre al final el metodo next() para finalizar el hilo de request , response.
}


exports.date = date;