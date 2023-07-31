const express = require('express')
const router = express.Router()
const apiController = require('../controllers/apiController')
const {validarIdAutomovil} = require('../middlewares/Automovil/validarIdAutomovil')
const  checksAutomovil = require('../middlewares/Automovil/checksAutomovil')
const {validarChecks} = require('../middlewares/validarChecks')
const checksPedido = require('../middlewares/Pedidos/checksPedido')
const { validarIdPedido } = require('../middlewares/Pedidos/validarIdPedido')
const checksVendedor = require('../middlewares/Vendedores/checksVendedor')
const {validarIdVendedor} = require('../middlewares/Vendedores/validarIdVendedor')



router.get("/catalogo", apiController.catalogo)
router.post('/agregarAutomovil', checksAutomovil, validarChecks, apiController.agregarAutomovil)
router.put('/editarAutomovil/:id',validarIdAutomovil, checksAutomovil, validarChecks, apiController.editarAutomovil)
router.delete('/eliminarAutomovil/:id',validarIdAutomovil, apiController.eliminarAutomovil)

router.get('/pedidos', apiController.pedidos)
router.post('/agregarPedido',checksPedido, validarChecks, apiController.agregarPedido)
router.put('/editarPedido/:id', validarIdPedido, checksPedido,validarChecks, apiController.editarPedido)
router.delete('/eliminarPedido/:id', validarIdPedido, apiController.eliminarPedido)

router.get('/vendedores', apiController.vendedores)
router.post('/agregarVendedor',checksVendedor, validarChecks, apiController.agregarVendedor)
router.put('/editarVendedor/:id', validarIdVendedor, checksVendedor, validarChecks, apiController.editarVendedor)
router.delete('/eliminarVendedor/:id', validarIdVendedor, apiController.eliminarVendedor)

router.get('/generarPatente', apiController.generarPatente) //devuelve una lista de patentes aleatoria

module.exports = router