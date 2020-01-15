
// Validaciones, estas validacion se realizan en los tipos de datos, se realizan en el schema type podemos parametrizar campos requeridos si o si, podemos parametrizar
// campos con max y min.

// Coneccion del servidor
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/carsdb2', {useNewUrlParser: true})             // definimos el nombre de la base de datos.
    .then(() => { console.log('Conectado correctamente a MongoDB')})
    .catch(() => { console.log('Error al conetarse a MongoDB')})

// Esuqema o modelo de datos    
const carSchema = new mongoose.Schema({
    company: {
        type: String,
        requerid: true,
        //lowercase: true,                // Convierte todo a minuscula
        uppercase: true,                // Convierte todo a mayuscula
        trim: true,                     // Elimina espacios que no necesitamos
        minlength: 2,                   
        maxlength: 99,
        enun: ["BMW", "Audi"],          //  Solo acepta en el campo parametros parametrizados
    },
    model: String,
    sold: Boolean,
    price: {
        type: String,
        required: function () {
            return this.sold
        }
    },
    year:{
        type: Number,
        min: 2000,
        max: 2030,
        get: y => Math.round(y)        // Sirve para redondear los valores decimales
    },
    extras: [String],
    date: {type: Date, default: Date.now}
})

const Car = mongoose.model('car', carSchema)

cerateCar()

async function cerateCar(){
    const car = new Car({
       company: 'BMW',
       model: 'X7',
       price:  6000,
       year: 2040,
       sold: true,
       extras:['4x4']
    })

    try{
        const result = await car.save()
    console.log(result);
    }catch (error){
        console.log(error.message);
    }
}