const mongoose = require('mongoose')
const express = require('express')
const app = express()
const car = require('./routes/car')
const user = require('./routes/user')
const company = require('./routes/company')
const sale = require('./routes/sale')
app.use(express.json())
app.use('/api/cars/', car)
app.use('/api/user/', user)
app.use('/api/company/', company)
app.use('/api/sale/', sale)
const port = process.env.PORT || 3003
app.listen(port, ()=> console.log('Escuchando Puerto: ' + port))

mongoose.connect('mongodb://localhost/carsdb',{useNewUrlParser:true, useFindAndModify:false})
    .then(()=> console.log('Conectado a MongoDb'))
    .catch(erro => console.log('No se ha conectado a MongoDb'))


