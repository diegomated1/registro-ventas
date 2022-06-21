import express from 'express';

const aptoRouter = express.Router(); 
const mpRouter = express.Router(); 
const productoRouter = express.Router(); 
const ventaRouter = express.Router(); 

import apto from '../controllers/apartamentoController.js';
import mp from '../controllers/metodoPagoController.js';
import producto from '../controllers/productoController.js';
import venta from '../controllers/ventaController.js';

aptoRouter.get('/', apto.getApartamento);
aptoRouter.get('/:torre', apto.getApartamento);
aptoRouter.get('/:torre/:piso', apto.getApartamento);
aptoRouter.get('/:torre/:piso/:numero', apto.getApartamento);
aptoRouter.post('/', apto.addApartamento);
aptoRouter.put('/:torre/:piso/:numero', apto.editApartamento);
aptoRouter.delete('/:torre/:piso/:numero', apto.deleteApartamento);

mpRouter.get('/', mp.getMetodoPago);
mpRouter.get('/:idmp', mp.getMetodoPago);
mpRouter.post('/', mp.addMetodoPago);
mpRouter.put('/:idmp', mp.editMetodoPago);
mpRouter.delete('/:idmp', mp.deleteMetodoPago);

productoRouter.get('/', producto.getProducto);
productoRouter.get('/:idproducto', producto.getProducto);
productoRouter.post('/', producto.addProducto);
productoRouter.put('/:idproducto', producto.editProducto);
productoRouter.delete('/:idproducto', producto.deleteProducto);

ventaRouter.get('/', venta.getVenta);
ventaRouter.get('/:idventa', venta.getVenta);
ventaRouter.post('/', venta.addVenta);
ventaRouter.put('/:idventa', venta.editVenta);
ventaRouter.delete('/:idventa', venta.deleteVenta);

export default {
    apto: aptoRouter,
    mp: mpRouter,
    producto: productoRouter,
    venta: ventaRouter
}
