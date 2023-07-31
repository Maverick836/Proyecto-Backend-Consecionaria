const {Automoviles} = require('../models/autos')
const {Pedidos} = require('../models/pedidos')
const {Vendedores} = require('../models/vendedores')
const https = require('https')


const apiController = {
    
    async catalogo (req, res){
        const list = await Automoviles.find()
        res.status(200).json(list)
    },
    async agregarAutomovil (req, res){
        try {
            const newAutomovil = new Automoviles(req.body)
            newAutomovil.save()
            res.status(201).json({msg: "Se agrego un nuevo automovil", newAutomovil})
        } catch (error) {
            res.json(error)
        }
    },
    async editarAutomovil (req,res){
        try {
            await Automoviles.findByIdAndUpdate(req.params.id, req.body)
            const busqueda = await Automoviles.findById(req.params.id)
            res.status(200).json({msg:"Se actualizo el automovil", busqueda})
        } catch (error) {
            res.json(error)
        }
    },
    async eliminarAutomovil (req, res) {
        try {
        await Automoviles.findByIdAndDelete(req.params.id)    
        res.status(200).json({msg: `Se eliminó el automovil con id: ${req.params.id}`})
        } catch (error) {
            res.json(error)
        }
    },
    async pedidos(req, res){
        try {
            const list = await Pedidos.find()
            res.status(200).json(list)
        } catch (error) {
            res.json(error)
        }
    },
    async agregarPedido(req, res){
        try {
            const newPedido = new Pedidos(req.body)
            await newPedido.save()
            res.status(201).json({msg: "Se agrego un nuevo pedido", newPedido})
        } catch (error) {
            res.json(error)
        }
    },
    async editarPedido(req, res){
        try {
            await Pedidos.findByIdAndUpdate(req.params.id, req.body)
            const busqueda = await Pedidos.findById(req.params.id)
            res.status(200).json({msg: 'Se actualizo el pedido', busqueda})
        } catch (error) {
            res.json(error)
        }
    },
    async eliminarPedido(req, res){
        try {
            await Pedidos.findByIdAndDelete(req.params.id)
            res.status(200).json({msg: `Se eliminó el pedido con el id: ${req.params.id}`})
        } catch (error) {
            res.json(error)
        }
    },

    async vendedores(req,res){
        try {
            const list = await Vendedores.find()
            res.status(200).json(list)
        } catch (error) {
            res.status(400).json(error)
        }
    },
    async agregarVendedor(req, res){
        try {
            const newVendedor = new Vendedores(req.body)
            await newVendedor.save()
            res.status(201).json({msg: 'Se agrego un nuevo vendedor', newVendedor})
        } catch (error) {
            res.status(400).json(error)
        }
    },
    async editarVendedor(req, res){
        try {
            await Vendedores.findByIdAndUpdate(req.params.id, req.body)
            const busqueda = await Vendedores.findById(req.params.id)
            res.status(200).json({msg: `Se actualizo el vendedor`, busqueda})
        } catch (error) {
            res.status(400).json(error)
        }
    },
    async eliminarVendedor(req, res){
        try {
            await Vendedores.findByIdAndDelete(req.params.id)
            res.status(200).json({msg:`Se eliminó el vendedor con id: ${req.params.id}`})
        } catch (error) {
            res.status(400).json(error)
        }
    },
   async generarPatente(req,res){
        try {
            const pedido = await https.request('https://api.generadordni.es/v2/vehicle/platenumber', (respuesta) => {
              let datosPedido = '';
        
              respuesta.on('data', (chunk) => {
                datosPedido += chunk;
              });

              respuesta.on('end', () => {
                const patentes = JSON.parse(datosPedido);
                res.status(200).json(patentes);
              });
            });
        
            pedido.end();
          } catch (error) {
            res.status(400).json({ error: 'Hubo un error al procesar la solicitud.'});
          }}
          //Esta es una solicitud a una api externa que nos devuelve una lista de patentes aleatoria
}

module.exports = apiController