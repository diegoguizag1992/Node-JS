const express = require('express')
const Sale = require('../models/sale')
const Car = require('../models/car')
const User = require('../models/user')
const router = express.Router()
const mongoose = require('mongoose')

router.get('/', async(req, res) =>{
    const sales = await Sale.find()
    res.send(sales)
})

router.post('/', async(req, res) => {
    const user = await User.findById(req.body.userId)             // para realizar una venta solicitamos el id del usuario para verificar que este creado
    if(!user) return res.status(400).send('Usuario no existe')

    const car = await Car.findById(req.body.carId)                // para realizar una vrnts solicitamos el id del coche para verificar que este creado
    if(!car) return res.status(400).send('Car no existe')

    if(car.sold === true) return res.status(400).send('El coche ya ha sido vendido y no se pued evender de nuevo')

    const sale = new Sale({
        user:{
            _id: user._id,                 // Nota: para realizar este post tenemos que enviar en el body de postman el user:_id tambien el car:_id y el
            nombre: user.nombre,           // parametro price.
            email: user.email
        },
        car:{
            _id: car._id,
            model: car.model
        },
        price: req.body.price
    })

    /*
    const result = await sale.save()       //  Con esto indicamos que salvamos la peticion post
    user.isCustomer = true                 
    user.save()
    car.sold = true                        // Con esta linea de codigo estamos modificando el documento car y le estamos diciendo que este vehiculo ya esta vendido
    car.save()
    res.status(201).send(result)
    */

    const session = await mongoose.startSession()
    session.startTransaction()
    try{
        const result = await sale.save()       //  Con esto indicamos que salvamos la peticion post
        user.isCustomer = true                 
        user.save()
        car.sold = true                        // Con esta linea de codigo estamos modificando el documento car y le estamos diciendo que este vehiculo ya esta vendido
        car.save()
        await session.commitTransaction()
        session.endSession();
        res.status(201).send(result)
    }catch(error){
        await session.abortTransaction()
        session.endSession()
        res.status(500).send(error.message)
    }
})

module.exports = router