const express = require('express')                                    //  Importamos el modulos Express 
const { check, validationResult } = require('express-validator');     //  Esta importacion nos sirve para validar los campos

//const app = express()                                               //  Ya no manejaremos app si no router a continuacion 
const router = express.Router();                                      //  Utilice la clase express.Router para crear manejadores de rutas montables y modulares. 
                                                                      //  Una instancia Router es un sistema de middleware y direccionamiento completo; por este motivo, 
                                                                      //  a menudo se conoce como una “miniaplicación”.

var coches = [                                                        // Declaramos un array para trabajar la diferentes solicitudes, GET, POST, PUT, DELETE 
  {id: 0, company: 'BMW', model: 'X3', year: '2020' },
  {id: 1, company: 'Audi', model: 'A1', year: '2021' },
  {id: 2, company: 'Mercedes', model: 'Clase A', year: '2022' }
]

router.get('/list', function (req, res) {                      
  res.send(['BMW', 'AUDI A3', 'Mercedes clase A'])                               
})

/*
Ejemplo: 
Se necesito pasar un id por medio de la URL, y se imprimi el id que se paso en el documento. 
*/
router.get('/id/:id', function (req, res) {                      
    res.send(req.params.id)                               
})

router.get('/:marca/:model', function (req, res) {                      
   // res.send(req.params.marca)                                // Nos trae la informacion de la marca que ingresamos en la URL 
   // res.send(req.params.model)                                // Nos trae informacion del modelo que ingresamos en la URL  
    res.send(req.params)                                        // Nos muestra la informacion en formato objeto  {"marca":"BMW","model":"serie3"}
})


router.get('/', (req, res) => {                                    // solicitud GET que pinta la informacion del array de coches en el HTML.
    res.send(coches);
})

router.get('/:company', (req, res) => {                                            // Se utiliza req.params cuando la informacion va en la URL 
  const coche = coches.find(coche => coche.company === req.params.company)      //  En esta solicitud get filtramos el array coches, los parametros que vamos
                                                                                //  a filtrar los enviamos a traves de la URL todo se almacena en la variable coche
  if (!coche) {                                                                 //  En esta validacion verificamos si existe un coche o no.
    res.status(404).send('No tenemos ningun coche de esa marca')                //  Aca enviamos mensaje 404 (recurso no encontrado) e imprimimos un mensaje en el HTML
  }else{
    res.send(coche)                                                            //  Nos muestra la informacion de del coche si coincide con el filtro
  } 
})

router.post('/', (req, res)=>{                                      // Metodo POST
  var carId = coches.length;
  var coche ={
      id: carId,                                                   // Se utiliza req.body cuando la informacion va en el HTML  
      company: req.body.company,
      model: req.body.model,
      year: req.body.year
  }
  coches.push(coche)
  res.status(201).send(coche)                                     // 201 indica que la solicitud ha tenido exito y ha llevado a la creacion de un recurso.

})

router.post('/2', (req, res)=>{                                  // Metodo POST
  if (!req.body.company || req.body.company.length < 3) {        // No spermite validar que le campo company contenga informacion y que sea mas de tres parametros
    res.status(404).send('Introduce la empresa correcta')  
    return
  }

  var carId = coches.length;
  var coche ={
      id: carId,                                               // Se utiliza req.body cuando la informacion va en el HTML  
      company: req.body.company,
      model: req.body.model,
      year: req.body.year
  }
  coches.push(coche)
  res.status(201).send(coche)                                   // 201 indica que la solicitud ha tenido exito y ha llevado a la creacion de un recurso.

})

router.post('/3', [                                             // Metodo POST validar campos con express.validator
    
    check('company').isEmail(),                                 //  Check valida si en el campo es introducido un email correcto
    check('model').isLength({min: 3})                           //  Check valida que este campo tenga minimo 3 caracteres.
  ], (req, res) => {  
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }                                                
  
    var carId = coches.length;
    var coche ={
      id: carId,                                              // Se utiliza req.body cuando la informacion va en el HTML  
      company: req.body.company,
      model: req.body.model,
      year: req.body.year
    }
    
    coches.push(coche)
    res.status(201).send(coche)                               // 201 indica que la solicitud ha tenido exito y ha llevado a la creacion de un recurso.

})

router.put('/:id', [                                         // Metodo PUT nos ayuda actualizar la informacion de la solicitud realizada
    
  check('company').isLength({min: 3}),                        //  Check valida que este campo tenga minimo 3 caracteres.
  check('model').isLength({min: 3})                           //  Check valida que este campo tenga minimo 3 caracteres.
], (req, res) => {  
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }                                                

  // Vamos a codificar un metodo de actualizacion y estamos pasando el id lo primero que se debe hacer es si ese id existe.

  const coche = coches.find(coche => coche.id === parseInt(req.params.id))       //  ParseInt nos ayuda a convertir la variable en numero

  if (!coche) {                                                                  //  validamos si coche no existe
    return res.status(404).send('El coche con ese ID no existe')
  }

  coche.company = req.body.company
  coche.model = req.body.model
  coche.year = req.body.year
  
  res.status(204).send()                                   // 204 La petición se ha completado con éxito pero su respuesta no tiene ningún contenido

})

router.delete('/:id', (req, res) => {                      // Metodo Delete nos permite eliminar el registro deseado.
                                            
  // Vamos a codificar un metodo que nos permita eliminar un registro pasando el id por la URL, lo primero que vamos hacer es si el id existe por medio de un filtro.

  const coche = coches.find(coche => coche.id === parseInt(req.params.id))       //  ParseInt nos ayuda a convertir la variable en numero

  if (!coche) {                                                                  //  validamos si coche no existe
    return res.status(404).send('El coche con ese ID no existe, no se puede borrar')
  }

  const index = coches.indexOf(coche)                        //  Trae la informacion de la posicion del array que se va a eliminar
  coches.splice(index, 1)                                    //  El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
  res.status(204).send('coche borrado')                      // 204 La petición se ha completado con éxito pero su respuesta no tiene ningún contenido

})


module.exports = router