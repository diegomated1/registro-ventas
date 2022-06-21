import {Sequelize} from 'sequelize';
import models from '../models/models.js';

const getVenta = async(req, res)=>{
    try{
        if(req.params.idventa===undefined){
            var ventas = await models.Venta.findAll({raw: true, nest: true});
        }else{
            var ventas_idventas = await models.Venta.findAll({
                where: {
                    idventa: parseInt(req.params.idventa)
                },
                include: [{
                    model: models.Metodo_pago,
                    attributes: ['nombre']
                }, {
                    model: models.Apartamento
                }],
                raw: true, nest: true
            });
            var productos = await models.Producto.findAll({
                include: {
                    model: models.Venta,
                    attributes: [],
                    where: {
                        idventa: parseInt(req.params.idventa)
                    },
                    through: {
                        attributes: ['cantidad', 'valor_unidad']
                    }
                },
                raw: true, nest: true
            });
            var ventas = (ventas_idventas.length>0) ? {
                venta: ventas_idventas,
                productos: productos
            } : {};
        }
        res.json(ventas);
    }catch(err){
        res.json({error: err.message});
    }
}

const addVenta = async(req, res)=>{
    try{
        var venta = await models.Venta.create(req.body.venta);
        
        for(let i=0;i<req.body.productos.length;i++){
            req.body.productos[i].idventa = venta.dataValues.idventa;
            await models.VentaxProducto.create(req.body.productos[i]);
        }

        res.json({message: "añadido"});
    }catch(err){
        console.log(err);
        res.json({error: err.message});
    }
}

const editVenta = async(req, res)=>{
    try{
        await models.Venta.update(req.body.venta, {
            where: {
                idventa: parseInt(req.params.idventa)
            }
        });

        await models.VentaxProducto.destroy({
            where: {
                idventa: parseInt(req.params.idventa)
            }
        });

        for(let i=0;i<req.body.productos.length;i++){
            req.body.productos[i].idventa = req.params.idventa;
            await models.VentaxProducto.create(req.body.productos[i]);
        }

        res.json({message: "editado"});
    }catch(err){
        res.json({error: err.message})
    }
}

const deleteVenta = async(req, res)=>{
    try{
        await models.VentaxProducto.destroy({
            where: {
                idventa: parseInt(req.params.idventa)
            }
        });

        await models.Venta.destroy({
            where: {
                idventa: parseInt(req.params.idventa)
            }
        });

        res.json({message: "deleted"});
    }catch(err){
        res.json({error: err.message});
    }
}

export default {
    getVenta: getVenta,
    addVenta: addVenta,
    editVenta: editVenta,
    deleteVenta: deleteVenta
}
 