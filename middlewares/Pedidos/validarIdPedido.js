const {Pedidos} = require('../../models/pedidos')

const validarIdPedido = async (req, res, next) => {
    try {
        const busqueda = await Pedidos.findById(req.params.id)
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

module.exports = {validarIdPedido}