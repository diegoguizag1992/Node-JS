
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        minlength: 3,
        maxlength: 30,
        lowercase: true,
        required: true
    },
    isCustomer: Boolean,
    email: {
        type: String
    },
    fecha: {
        type: Date, 
        default: Date.now
    },
})

const User = mongoose.model('user', userSchema)

module.exports = User