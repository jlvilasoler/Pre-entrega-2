//SECCION VENTAS : PRE-ENTREGA 1:

// Variables:
let total = 0;
let descuento = 0; // Descuento del 0% (por defecto)
let cupones = {
    "FIDELITY": 0.1, // Descuento del 10%
    "VIP": 0.3 // Descuento del 30%
};

//BIENVENIDA, SE SOLICITA NOMBRE:
let nombre = prompt("Bienvenido/a a TIENDAONLINE.UY , ¿Cuál es su nombre?");

//MENSAJE DE BIENVENIDA CON NOMBRE:
alert("Hola " + nombre + ", " + "Le damos la bienvenida a TIENDAONLINE.UY");  

//SOLICITA NUMERO DE DOCUMENTO:
let documento = prompt(nombre + ", " + "Indica su número de Documento:"); 

//INICIO OPERACION DE COMPRA CON OPCIONES DE COMPRA DE PRODUCTOS:
let mensaje = prompt("¿Desea comprar un producto? (s-si / n-no)"); 
while (mensaje == "s" || mensaje == "S") {
    let producto = prompt("1- Pomelo Paso de los Toros (bt 500ml)\n2- Coca Cola light (bt 600ml)\n3- Agua Salus con gas (bt 600ml)\n4- Coca Cola Regular (bt 600ml)\n5- Whisky Jhonnie Walker - Etiqueta Negra (1l)"); //Seleccion de producto

    switch (producto) {
        case "1":
            alert("Pomelo Paso de los Toros (bt 500ml) .... $ 100,00 \nAGREGADO AL CARRITO");
            incrementarTotal(100);
            break;
        case "2":
            alert("Coca Cola light (bt 600ml) .... $ 120,00 \nAGREGADO AL CARRITO");
            incrementarTotal(120);
            break;
        case "3":
            alert("Agua Salus con gas (bt 600ml) .... $ 70,00 \nAGREGADO AL CARRITO");
            incrementarTotal(70);
            break;
        case "4":
            alert("Coca Cola Regular (bt 600ml) .... $ 120,00 \nAGREGADO AL CARRITO");
            incrementarTotal(120);
            break;
        case "5":
            alert("Whisky Johnnie Walker - Etiqueta negra (1l) .... $ 4000,00 \nAGREGADO AL CARRITO");
            incrementarTotal(4000);
            break;
        default:
            alert("Código de producto inexistente");
            break;
    }

    mensaje = prompt("¿Desea comprar otro producto? (s-si / n-no");
}

//VERIFICAR SI EL USUARIO INGRESÓ UN CUPÓN VALIDO:
let cupon = prompt("¿Tiene un cupón de descuento? (Ingrese el cupón o presione cancelar)");
if (cupones.hasOwnProperty(cupon)) {
descuento = cupones[cupon]; //Asignar el descuento correspondiente al cupón ingresado Tipo: "% DTO FIDELITY O VIP"
alert("Cupón aplicado: " + cupon + " - Descuento del " + descuento*100 + "%")}


//CALCULA EL PRECIO SIN DESCUENTO Y CON DESCUENTO:
let precioTotalSinDescuento = total; //Precio Total
let precioTotalConDescuento = total * (1 - descuento); //Precio Total con Descuento
let beneficio = precioTotalSinDescuento - precioTotalConDescuento; //Valor del descuento en $

//NOS MUESTRA UN MENSAJE DE PRECIO TOTAL SIN DESCUENTO Y CON DESCUENTO, SI HAY:
if (descuento > 0) {
    alert("TOTAL DE LA COMPRA:\n\nTotal sin descuento: $" + precioTotalSinDescuento + "\nDescuento: -$" + (precioTotalSinDescuento - precioTotalConDescuento) + ("\n\nTOTAL COMPRA CON DESCUENTO: $" + precioTotalConDescuento));
    } else {
        alert("TOTAL DE LA COMPRA:\n\nTotal: $" + precioTotalSinDescuento);
    }

// MEDIO DE PAGO (TARJETAS):
//Ingresa medio de pago:
ingresarMedioDePago();


//Ingresa numero tarjeta:
function validarTarj(){
    let tarjeta;

for(i=3; i>0; i--){
    tarjeta = prompt("Ingrese su número de tarjeta, de 16 digitos:");
    if(tarjeta.length === 16){
        alert("Número valido");
        break;
    }else if(i === 1){
            alert("Demasiados intentos");
        }else{
            alert("Intente nuevamente");     
        }
    }
}
validarTarj();

//Ingresa fecha vencimiento tarjeta:
function validarVencimiento(){
    let fechaVencimiento = prompt("Ingresar fecha de vencimiento de tarjeta:\n(indicado al dorso)");
}
validarVencimiento();

//Ingresa codigo seguridad tarjeta de 3 digitos (al dorso):
function codigoSeguridad(){
    let codigo;
for(i=3; i>0; i--){
    codigo = prompt("Ingresar código de 3 digitos:\n(indicado al dorso de la tarjeta)");
    if(codigo.length === 3){
        alert("Código valido");
        break;
    }else if(i === 1){
            alert("Demasiados intentos");
        }else{
            alert("Intente nuevamente");     
        }
    }
}
codigoSeguridad();

//COSTO ENVÍO (Si corresponde), > $4000 de compra costo envío gratis:
//Además nos muestra un alert con todos los descuentos, si corresponde:
const envio = () => {
    if (total >= 4000){
        alert("Total Compra: $" + precioTotalSinDescuento + "\nDescuento: -$" + (beneficio) +"\nCosto de envío: $0\n\nTOTAL DE LA COMPRA: $" +(total-beneficio));
    }else{
        total += 200
        alert("Total Compra: $" + precioTotalSinDescuento + "\nDescuento: -$" + (beneficio) + "\nCosto de envío: $200\n\nTOTAL DE LA COMPRA: $" +(total-beneficio));  
    }
}

envio();

//Solicita dirección de envio:
let direccion = prompt(nombre + "," + " " +"nos podría indicar su dirección de envío:"); 

alert("Muchas gracias por su compra "+nombre+"\n\nLo esperamos pronto...");








// FUNCIONES:

// Funcion mensaje "Llevás gastado":
function incrementarTotal(precio) {
    total = total + precio;
    alert("LLEVÁS GASTADO: $" + total);
}

function ingresarMedioDePago(){
    let codigoMedioDePago = prompt("Elije el medio de pago que deseas utilizar:\n1-TARJETA DE DEBITO\n2-TARJETA DE CREDITO");
    return codigoMedioDePago;
}
