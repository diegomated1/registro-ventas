import {DataTypes} from 'sequelize';
import {db} from "../../database/db.js";

export const Venta = db.define('venta',{
    idventa: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idapto: DataTypes.INTEGER,
    fecha_entrega: DataTypes.INTEGER,
    valor_venta: DataTypes.INTEGER,
    idmp: DataTypes.INTEGER,
    confirmar_pago: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});
