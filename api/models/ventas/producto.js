import {DataTypes} from 'sequelize';
import {db} from "../../database/db.js";

export const Producto = db.define('producto',{
    idproducto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    proteina: DataTypes.STRING,
    principio: DataTypes.STRING,
    sopa: DataTypes.STRING,
    jugo: DataTypes.STRING
}, {
    freezeTableName: true,
    timestamps: false
});
