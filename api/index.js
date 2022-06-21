import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import morgan from "morgan";

const app = express();
dotenv.config();

// Routers
import r from './routes/routes.js';

// Midlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan('tiny'));

// Routes
app.use('/apartamento', r.apto);
app.use('/metodopago', r.mp);
app.use('/producto', r.producto);
app.use('/venta', r.venta);

app.listen(2000, ()=>{
    console.log("Server on port 2000")
});

