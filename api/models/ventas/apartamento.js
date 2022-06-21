import {DataTypes} from 'sequelize';
import {db} from "../../database/db.js";

export const Apartamento = db.define('apartamento',{
    idapto: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    torre: DataTypes.INTEGER,
    piso: DataTypes.INTEGER,
    apartamento: DataTypes.INTEGER
}, {
    freezeTableName: true,
    timestamps: false
});
