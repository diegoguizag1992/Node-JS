const mongoose = require('mongoose')

const saleSchema = new mongoose.Schema({
    user: {
        type: new mongoose.Schema({
            nombre: String,
            email: String
        }),
        required: true
    },
    car:{
        type: new mongoose.Schema({
            model: String
        }),
        requerid: true
    },
    price: Number,
    date: {type: Date, default: Date.now}
})

const Sale = mongoose.model('sale', saleSchema)

module.exports = Sale