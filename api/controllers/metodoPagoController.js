import models from '../models/models.js';

const getMetodoPago = async(req, res)=>{
    try{
        if(req.params.idmp===undefined){
            var mp = await models.Metodo_pago.findAll({raw: true, nest: true});
        }else{
            var mp = await models.Metodo_pago.findAll({
                where: {
                    idmp: parseInt(req.params.idmp)
                },
                raw: true, nest: true
            });
        }
        res.json(mp);
    }catch(err){
        res.json({error: err.message});
    }
}

const addMetodoPago = async(req, res)=>{
    try{
        await models.Metodo_pago.create(req.body);
        res.json({message: "añadido"});
    }catch(err){
        res.json({error: err.message});
    }
}

const editMetodoPago = async(req, res)=>{
    try{
        await models.Metodo_pago.update(req.body, {
            where: {
                idmp: parseInt(req.params.idmp)
            }
        });
        res.json({message: "editado"});
    }catch(err){
        res.json({error: err.message})
    }
}

const deleteMetodoPago = async(req, res)=>{
    try{
        await models.Metodo_pago.destroy({
            where: {
                idmp: parseInt(req.params.idmp)
            }
        });
        res.json({message: "deleted"});
    }catch(err){
        res.json({error: err.message});
    }
}

export default {
    getMetodoPago: getMetodoPago,
    addMetodoPago: addMetodoPago,
    editMetodoPago: editMetodoPago,
    deleteMetodoPago: deleteMetodoPago
}