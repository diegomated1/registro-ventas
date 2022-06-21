import {DataTypes} from 'sequelize';
import {db} from "../../database/db.js";

export const VentaxProducto = db.define('ventaxproducto',{
    idvp: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cantidad: DataTypes.INTEGER,
    valor_unidad: DataTypes.INTEGER
}, {
    freezeTableName: true,
    timestamps: false
});
