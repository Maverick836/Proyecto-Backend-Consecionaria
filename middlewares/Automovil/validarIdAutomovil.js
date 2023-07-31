const {Automoviles} = require('../../models/autos')

const validarIdAutomovil = async (req, res, next) => {
    try {
        const busqueda = await Automoviles.findById(req.params.id)
    if (busqueda !== null) {
        next()
    } else {
        res.status(404).json({
        msg: `El id ingresado no se encontró ${req.params.id}`
        })
    }
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {validarIdAutomovil}