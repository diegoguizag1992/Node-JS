
/*
Para trabajar con mongoose lo primero que demos hacer es ir a la pagina principal https://mongoosejs.com/ y traer el modulo de la pagina que se muestra en las
lineas de abajo a continucion. La coneccion de mongoose nos devuelve una promesa.  
Si la conexion de nuestro proyecto es con otro servidor se debe remplazar en esta linea de codigo. la palabra /test que se encuentra en la ruta es el nombre de 
la base de datos.
*/

// Coneccion del servidor
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/carsdb', {useNewUrlParser: true})             // definimos el nombre de la base de datos.
    .then(() => { console.log('Conectado correctamente a MongoDB')})
    .catch(() => { console.log('Error al conetarse a MongoDB')})

// Esuqema o modelo de datos    
const carSchema = new mongoose.Schema({
    compay: String,
    model: String,
    price: String,
    year: Number,
    sold: Boolean,
    extras: [String],
    date: {type: Date, default: Date.now}
})

// Vamos a crear un docuemnto en nuestra base de datos.
const Car = mongoose.model('car', carSchema)


//createCar()

async function createCar(){
    const car = new Car({
        compay: 'Chevrolet',
        model: 'Sagen',
        price: 9200,
        year: 2019,
        sold: false,
        extras: ['Automatic', 'Automovil']
    })
    const result = await car.save()
    console.log(result);   
}

// Obtener informacion de los coches 
//getCars()
async function getCars(){
    const cars = await Car.find()
    console.log(cars);
}

// vamos a filtrar por el nombre o saber si esta vendido o no, en esta funcion podemos ver como podriamos filtrar.
//getCompanyAndSoldFilterCars()

async function getCompanyAndSoldFilterCars(){
    const cars = await Car.find({compay: "BMW", sold: false})
    console.log(cars);    
}

// Filtro con mas parametros
//getMoreFilterCar()

async function getMoreFilterCar(){
    const cars = await Car
    .find({compay: "BMW", sold: false})            // Filtra la informacion. 
    .sort({price: 1})                              // Organiza el precio de menor a mayor o de mayor a menor
    .limit(2)                                      // limite de la consulta 
    .select({compay: 1, model: 1, price: 1})       // Select nos sirve para seleccionar la informacion del documento que queremos enviar o mostrar
    console.log(cars);
}

// Utilizando operadores mongoDB $eq = igual,  $ne = no igual, $gt = mas grande que, $gte = Mas grande que o igual, $lt = menos que, $lte = menos que o igual.
//getFilterPriceCars()

async function getFilterPriceCars(){
    const cars = await Car
    //.find({price: {$gt: 2000}})                   // Nos trae los precios superiores a 2000 desde 2001 en adelante
    .find({price: {$gt: 2000, $lt: 5000}})          // Nos trae los precion mayores a 2000 y menores a 5000
    console.log(cars);
}


// Operadores $and = Este operador realiza la operacion "y" en un array de expresiones y seleccionan los docuemntos que cumplan todas las expresiones del array.
//   $or = Este operador realiza la operacion "o" en un array de expresiones. y selecciona los documentos que cumplen al menos una de las expresiones del array.
// Ejemplo filtro de nombre carros y precios.

//getFiltroPriceAndOrCars()

async function getFiltroPriceAndOrCars(){
    const cars = await Car
    .find()
    //.and([{compay: "BMW"}, {model: "X3"}])             // Se puede realizar filtro de varios parametros, Los deos deben de concidir para ver la informacion
    .or([{company: "Audi"}, {model: "X3"}])              // Si se cumple al menos un parametro nos trae la informacion.
    console.log(cars);
    
} 

//  Operador $count
// En este caso nos mostrara el numero de los documentos.

//getCountCar()

async function getCountCar(){
    const cars = await Car
    .find({compay: "BMW"})
    .count()
    console.log(cars);
}


// Paginacion para mostrar la informacion de los documentos de 10 en 10
//   //api/cars?pageNumber=4&pageSize=14       en este codigo estamos selecionando la pagina 4 y que nos traiga 14 documentos.   

//getPaginationCars()

async function getPaginationCars(){
    const pageNumber = 2                    // Numero de paginas
    const pageSize = 3                      // Numero de documentos por pagina

    const cars = await Car
    .find()
    .skip((pageNumber -1) * pageSize)       // parametrizamos el numero por le que queremos empezae y lo multiplicamos por las paginas.
    .limit(pageSize)                        // Parametrizamos el limite.
    console.log(cars);
}

//  Actualizar un coche en base de datos
// Para resolver este ejemplo se realizaron dos operaciones la primera para buscar el coche y la segunda para guardar los datos del coche

//updateCar('5e1509ae55a882072402a748')

async function updateCar(id){
    const car = await Car.findById(id)        //  buscamos el coche
    if (!car) return
    car.compay = 'Mercedes'
    car.model = "Clase A"

    const result = await car.save()          //  guardamos el coche.
    console.log(result);  
}

//  Actualizar el coche en un solo paso

//updateFirstCar('5e16656913a4920437f769dd')

async function updateFirstCar(id){
    const result = await Car.update(
        {_id: id},
        { $set:{
            compay: 'seat',
            model: 'Leon'
            }
        }
    )
    console.log(result);
} 

//  Metodo delete borrar un documento de nuestra base de datos


deleteCar('5e16656913a4920437f769dd')

async function deleteCar(id){
    const result = await Car.deleteOne({_id: id})
    console.log(result);
    
}
