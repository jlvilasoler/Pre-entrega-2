//STOCK DE PRODUCTOS POR E-COMMERCE (COMPRA Y VENTA) - PRE-ENTREGA-2 (ALUMNO: JOSE VILA):


class Producto {
    constructor(fechaCompra, idProveedor, numeroFactura, seccion, id, nombreDeProducto, costoConIva, cantidad, plazoDePago) {
        this.fechaCompra = fechaCompra;
        this.idProveedor = idProveedor;
        this.numeroFactura = numeroFactura;
        this.seccion = seccion;
        this.id = id;
        this.nombreDeProducto = nombreDeProducto;
        this.costoConIva = costoConIva;
        this.cantidad = cantidad;
        this.plazoDePago = plazoDePago;
    }
    costoSinIva() {
        this.costoSinIva = this.costoConIva / 1.22; // COSTO MERCADERIA SIN IVA
    }
    precioVentaSinIva() {
        this.precioVentaSinIva = this.costoConIva * 1.25; // PRECIO DE VENTA CONSUMIDOR SIN IVA , YA TIENE EL MARGEN INCLUIDO DE 25%
    }
    precioVentaConIva() {
        this.precioVentaConIva = this.precioVentaSinIva * 1.22;// PRECIO DE VENTA CONSUMIDOR CON IVA (FULL PRICE)
    }
    margen() {
        this.margen = (this.precioVentaConIva / this.costoConIva) - 1;// % MARGEN GANANCIA
    }
    gananciaConIva() {
        this.gananciaConIva = this.precioVentaConIva - this.costoConIva; // MARGEN DE GANANCIA EN PESOS CON IVA
    }
    gananciaSinIva() {
        this.gananciaSinIva = this.precioVentaSinIva - this.costoSinIva; // MARGEN DE GANANCIA EN PESOS SIN IVA
    }
    IvaCompras() {
        this.IvaCompras = this.costoConIva - this.costoSinIva; // IVA COMPRAS
    }
    IvaVentas() {
        this.IvaVentas = this.precioVentaConIva - this.precioVentaSinIva; // IVA VENTAS
    }


}

const producto1 = new Producto("12-12-12", 9991, 1001, 1, 60001, "COCA COLA LIGHT 600ML", 100, 2, "5");
const producto2 = new Producto("12-12-12", 9992, 1023, 1, 60002, "POMELO PASO DE LOS TOROS BT.500ML", 100, 2,4);
const producto3 = new Producto("12-12-12", 9993, 1011, 1, 60003, "COCA COLA BT 600ML", 100, 2,3);
const producto4 = new Producto("12-12-12", 9994, 1090, 1, 60004, "WHISKY JOHNNIE WALKER-ETIQUETA NEGRA 1L", 100, 2,2);

const productos = [producto1, producto2, producto3, producto4];
console.log(productos)





// 1 - FUNCIONALIDAD PARA AGREGAR PRODUCTOS COMPRADOS (INGRESO DE MERCADERIA):
function agregarProductos() {
    let fechaCompra = prompt("Ingrese la fecha de compra: (formato dd-mm-yy)");
    let idProveedor = prompt("Ingrese el número de proveedor (Ej. 1190):");
    let numeroFactura = prompt("Ingrese el número de factura (Ej. 5052):");
    let seccion = ingresarSeccion();
    let id = parseInt(prompt("Ingrese el id del producto: (EJ. 60010)"));
    let nombreDeProducto = prompt("Ingrese el nombre del producto: (Ej. SPRITE ZERO BT 1L)");
    let costoConIva = parseFloat(prompt("Ingrese el precio con iva que compramos la mercaderia: (Ej. 120)"));
    let cantidad = parseInt(prompt("Ingrese la cantidad comprada: (Ej. 10)"));
    let plazoDePago = plazoPago();
    if(plazoDePago < 6){
        alert("Operación Finalizada");
    }else{
        alert("Opcion Incorrecta, intente nuevamente");
    }

    productos.push(new Producto(fechaCompra, idProveedor, numeroFactura, seccion, id, nombreDeProducto, costoConIva, cantidad, plazoDePago));
}
agregarProductos();
console.log(productos);


function ingresarSeccion() {
    let seccion = prompt("Elije la seccion:\n1 - BEBIDAS\n2 - LIMPIEZA\n3 - ALMACÉN\n4 - PERFUMERÍA");
    return seccion
}

function plazoPago() {
    let plazoPago = prompt("Elije el plazo de pago:\n1 - CREDITO A 30 DIAS\n2 - CREDITO A 60 DIAS\n3 - CREDITO A 90 DIAS\n4- CREDITO A 120 DIAS\n5 - CONTADO");
    return plazoPago
}

// 2 - ORDENAR EL LISTADO DE PRODUCTOS QUE TENGO EN LA LISTA
for (const prod of productos) {
    prod.costoSinIva();
    prod.precioVentaSinIva();
    prod.precioVentaConIva();
    prod.margen();
    prod.gananciaConIva();
    prod.gananciaSinIva();
    prod.IvaVentas();
    prod.IvaCompras();
    console.table(prod.fechaCompra + " " + prod.seccion + " " + prod.idProveedor + " " + prod.numeroFactura + " " + prod.plazoDePago + " " + prod.id + " " + prod.nombreDeProducto + " " + prod.costoSinIva + " " + prod.costoConIva + " " + prod.precioVentaSinIva + " " + prod.precioVentaConIva + " " + prod.cantidad + " " + prod.margen + " " + prod.gananciaConIva + " " + prod.gananciaSinIva + " " + prod.IvaCompras + " " + prod.IvaVentas);
}

// 3 - REDUCE:
//REDUCE , nos dice el total de articulos que se compraron:
const cantidadTotalArticulos = productos.reduce((sumador, Producto) => sumador + Producto.cantidad, 0);
console.log("A) LA SUMA DE TODOS LOS PRODUCTOS QUE SE COMPRARON: " + cantidadTotalArticulos);

//REDUCE , nos dice el gasto total en productos acumulado:
const TotalGastado = productos.reduce((sumador, Producto) => sumador + Producto.costoConIva, 0);
console.log("B) GASTO TOTAL PRODUCTOS COMPRADOS (en pesos): " + TotalGastado);

//REDUCE , Total Iva Compras:
const TotalIvaCompras = productos.reduce((sumador, Producto) => sumador + Producto.IvaCompras, 0);
console.log("C) TOTAL IVA COMPRAS (en pesos): " + TotalIvaCompras);

//REDUCE , Total Iva Ventas:
const TotalIvaVentas = productos.reduce((sumador, Producto) => sumador + Producto.IvaVentas, 0);
console.log("D) TOTAL IVA VENTAS (en pesos): " + TotalIvaVentas);



// 4 - FIND:
//FIND , buscaremos un numero de ID DE ARTICULO determinado, se queda con el primero id que encuentra:
let idArticuloEncontrado = productos.find((producto) => producto.id == "60004");
if (idArticuloEncontrado != undefined) {
    console.table(idArticuloEncontrado);
} else {
    console.table("id articulo no encontrado");
}


// 5 - MAP:
//MAP, nos da el listado de articulos con sus precios de venta :
const listaNombreArticuloYPrecio = productos.map((producto) => {
    return {
        nombreProducto: producto.nombreDeProducto.toUpperCase(),
        precioVenta: producto.precioVentaConIva
    }
});
console.log(listaNombreArticuloYPrecio);


// 6 - FILTER:
//FILTER, nos devuelve la busqueda de todos los articulos que son botellas "BT":
const buscadorNombresProductos = productos.filter((producto) => producto.nombreDeProducto.includes("BT"));
console.log(buscadorNombresProductos);


// 7 - SOME:
//SOME, nos indica por nombre , si el articulo existe o no en la base de datos (nos da true o false): 
const existeArticulo = productos.some((producto) => producto.nombreDeProducto == "WHISKY JOHNNIE WALKER-ETIQUETA NEGRA 1L");
console.log(existeArticulo); // RESULTADO = TRUE
