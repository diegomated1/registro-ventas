import {DataTypes} from 'sequelize';
import {db} from "../../database/db.js";

export const Metodo_pago = db.define('metodo_pago',{
    idmp: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT
}, {
    freezeTableName: true,
    timestamps: false
});
