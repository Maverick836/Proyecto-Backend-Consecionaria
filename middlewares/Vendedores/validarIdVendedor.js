const { Vendedores } = require('../../models/vendedores');

const validarIdVendedor = async (req, res, next) => {
    try {
        const busqueda = await Vendedores.findById(req.params.id)
    if (busqueda !== null) {
        console.log('se resolvio correctamente');
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

module.exports = {validarIdVendedor}