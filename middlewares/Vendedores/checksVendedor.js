const {check} = require('express-validator') 
const checksVendedor = [
    check('nombre')
        .notEmpty().withMessage('El campo nombre es requerido')
        .isString().withMessage('El campo nombre tiene que ser un string'),
    check('apellido')
        .notEmpty().withMessage('El campo apellido es requerido')
        .isString().withMessage('El campo apellido tiene que ser un string'),
    check('turno')
        .notEmpty().withMessage('El campo turno es requerido')
        .isString().withMessage('El campo turno tiene que ser un string'),
    check('telefono')
        .notEmpty().withMessage('El campo telefono es requerido')
        .isNumeric().withMessage('El campo telefono tiene que ser un numero'),
    check('edad')
        .notEmpty().withMessage('El campo edad es requerido')
        .isNumeric().withMessage('El campo edad tiene que ser un numero'),
    check('autosVendidos')
    .notEmpty().withMessage('El campo autosVendidos es requerido')
    .isNumeric().withMessage('El campo autosVendidos tiene que ser un numero')
]

module.exports = checksVendedor