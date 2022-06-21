import models from '../models/models.js';

const getProducto = async(req, res)=>{
    try{
        if(req.params.idproducto===undefined){
            var producto = await models.Producto.findAll({raw: true, nest: true});
        }else{
            var producto = await models.Producto.findAll({
                where: {
                    idproducto: parseInt(req.params.idproducto)
                },
                raw: true, nest: true
            });
        }
        res.json(producto);
    }catch(err){
        res.json({error: err.message});
    }
}

const addProducto = async(req, res)=>{
    try{
        await models.Producto.create(req.body);
        res.json({message: "añadido"});
    }catch(err){
        res.json({error: err.message});
    }
}

const editProducto = async(req, res)=>{
    try{
        await models.Producto.update(req.body, {
            where: {
                idproducto: parseInt(req.params.idproducto)
            }
        });
        res.json({message: "editado"});
    }catch(err){
        res.json({error: err.message})
    }
}

const deleteProducto = async(req, res)=>{
    try{
        await models.Producto.destroy({
            where: {
                idproducto: parseInt(req.params.idproducto)
            }
        });
        res.json({message: "deleted"});
    }catch(err){
        res.json({error: err.message});
    }
}

export default {
    getProducto: getProducto,
    addProducto: addProducto,
    editProducto: editProducto,
    deleteProducto: deleteProducto
}