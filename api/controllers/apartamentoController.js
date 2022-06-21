import models from '../models/models.js';

const getApartamento = async(req, res)=>{
    try{
        if(req.params.torre===undefined){
            var aptos = await models.Apartamento.findAll({raw: true, nest: true});
        }else if(req.params.piso===undefined){
            var aptos = await models.Apartamento.findAll({
                where: {torre: parseInt(req.params.torre)},
                raw: true, nest: true
            });
        }else if(req.params.numero===undefined){
            var aptos = await models.Apartamento.findAll({
                where: {
                    torre: parseInt(req.params.torre),
                    piso: parseInt(req.params.piso)
                },
                raw: true, nest: true
            });
        }else{
            var aptos = await models.Apartamento.findAll({
                where: {
                    torre: parseInt(req.params.torre),
                    piso: parseInt(req.params.piso),
                    apartamento: parseInt(req.params.numero)
                },
                raw: true, nest: true
            });
        }
        res.json(aptos);
    }catch(err){
        res.json({error: err.message});
    }
}

const addApartamento = async(req, res)=>{
    try{
        await models.Apartamento.create(req.body);
        res.json({message: "añadido"});
    }catch(err){
        res.json({error: err.message});
    }
}

const editApartamento = async(req, res)=>{
    try{
        await models.Apartamento.update(req.body, {
            where: {
                torre: parseInt(req.params.torre),
                piso: parseInt(req.params.piso),
                apartamento: parseInt(req.params.numero)
            }
        });
        res.json({message: "editado"});
    }catch(err){
        res.json({error: err.message})
    }
}

const deleteApartamento = async(req, res)=>{
    try{
        await models.Apartamento.destroy({
            where: {
                torre: parseInt(req.params.torre),
                piso: parseInt(req.params.piso),
                apartamento: parseInt(req.params.numero)
            }
        });
        res.json({message: "deleted"});
    }catch(err){
        res.json({error: err.message});
    }
}

export default {
    getApartamento: getApartamento,
    addApartamento: addApartamento,
    editApartamento: editApartamento,
    deleteApartamento: deleteApartamento
}