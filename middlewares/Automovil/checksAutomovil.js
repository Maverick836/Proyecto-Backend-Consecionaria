const {check} = require('express-validator')

const checksAutomovil = [
    check('marca')
        .notEmpty().withMessage('El campo marca es requerido').
        isString().withMessage('El campo marca tiene que ser un string'),
    check('modelo')
        .notEmpty().withMessage('El campo modelo es requerido')
        .isString().withMessage('El campo modelo tiene que ser un string'),
    check('estado')
        .notEmpty().withMessage('El campo estado es requerido')
        .isString().withMessage('El campo estado tiene que ser un string'),
    check('kilometraje')
        .notEmpty().withMessage('El campo kilometraje es requerido')
        .isNumeric().withMessage('El campo kilometraje tiene que ser un numero'),
    check('combustible')
        .notEmpty().withMessage('El campo combustible es requerido')
        .isString().withMessage('El campo combustible tiene que ser un string'),
    check('color')
        .notEmpty().withMessage('El campo color es requerido')
        .isString().withMessage('El campo color tiene que ser un string'),
    check('fecha_fabricacion')
        .notEmpty().withMessage('El campo fecha_fabricacion es requerido')
        .isString().withMessage('El campo fecha_fabricacion tiene que ser un string'),
    check('precio')
        .notEmpty().withMessage('El campo precio es requerido')
        .isNumeric().withMessage('El campo precio tiene que ser un numero'),
    check('foto')
        .notEmpty().withMessage('El campo foto es requerido')
        .isString().withMessage('El campo foto debe ser un string'),
        //la idea es usar una url en texto para ser usada en el front
]

module.exports = checksAutomovil