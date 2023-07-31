const {Schema, model} = require('mongoose')

const schema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    turno:{
        type: String,
        required: true
    },
    telefono:{
        type: Number,
        required: true
    },
    edad:{
        type: Number,
        required: true
    },
    autosVendidos:{
        type: Number,
        required: true
    }
})

const Vendedores = model('Vendedores', schema) 


module.exports = {Vendedores}