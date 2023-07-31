const {Schema, model} = require('mongoose')

const schema = new Schema({
    idAuto:{
        type: String,
        required: true
    },
    montoPagar:{
        type: Number,
        required: true
    },
    dniComprador:{
        type: Number,
        required: true
    },
    direccionComprador:{
        type: String,
        required: true
    },
    fechaEntrega:{
        type: String,
        required: true
    },
})

const Pedidos = model('Pedidos', schema) 

module.exports = {Pedidos}