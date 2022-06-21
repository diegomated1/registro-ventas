import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const db = new Sequelize('ventas', 'root', process.env.DBPSS, {
    dialect: 'mysql',
    host: 'localhost',
    logging: false
});