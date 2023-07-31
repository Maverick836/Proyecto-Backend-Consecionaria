const {Schema, model} = require('mongoose')

const schema = new Schema({
    marca:{
        type: String,
        required: true
    },
    modelo:{
        type: String,
        required: true
    },
    estado:{
        type: String,
        required: true
    },
    kilometraje:{
        type: Number,
        required: true
    },
    combustible:{
        type:String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    fecha_fabricacion:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    foto:{
        type: String,
        required: true
    },
})

const Automoviles = model('Automoviles', schema) 


module.exports = {Automoviles}