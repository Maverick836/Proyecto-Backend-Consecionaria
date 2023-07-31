const {check} = require('express-validator') 
const checksPedido = [
    check('idAuto')
        .notEmpty().withMessage('El campo idAuto es requerido'),
    check('montoPagar')
        .notEmpty().withMessage('El campo montoPagar es requerido')
        .isNumeric().withMessage('El campo montoPagar tiene que ser un numero'),
    check('dniComprador')
        .notEmpty().withMessage('El campo dniComprador es requerido')
        .isNumeric().withMessage('El campo dniComprador tiene que ser un numero'),
    check('direccionComprador')
        .notEmpty().withMessage('El campo direccionComprador es requerido')
        .isString().withMessage('El campo direccionComprador tiene que ser un string'),
    check('fechaEntrega')
        .notEmpty().withMessage('El campo fechaEntrega es requerido')
        .isString().withMessage('El campo fechaEntrega tiene que ser un string')
]

module.exports = checksPedido