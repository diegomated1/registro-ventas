import { Apartamento } from './ventas/apartamento.js';
import { Metodo_pago } from './ventas/metodo_pago.js';
import { Venta } from './ventas/venta.js';
import { Producto } from './ventas/producto.js';
import { VentaxProducto } from './ventas/ventaxproducto.js';

Venta.belongsTo(Metodo_pago, {foreignKey: "idmp"});
Venta.belongsTo(Apartamento, {foreignKey: "idapto"});

Venta.belongsToMany(Producto, {
    through: VentaxProducto,
    foreignKey: "idventa"
});

Producto.belongsToMany(Venta, {
    through: VentaxProducto,
    foreignKey: "idproducto"
});

export default {
    Apartamento: Apartamento,
    Metodo_pago: Metodo_pago,
    Venta: Venta,
    Producto: Producto,
    VentaxProducto: VentaxProducto
}

