function calcularImporteLinea(precio,cantidad){ 
    return precio * cantidad;
}

function calcularIVA(precio,porcentajeiva){
    return precio * (porcentajeiva/100);
}

function calcularDescuento(precio,descuento){
    if (precio > 100) {descuento = 10;}
        else if (precio >= 50){descuento = 5;}
            else (precio < 50)
    return (precio *(descuento/100))
}

function calcularEnvio(precio){
    let envio = 4.95; 
        if (precio > 50) {envio = 0;}
            else {envio = 4.95;}
    return  envio
}

const stock = [10,25,3,0,7]

function contarAgotados(stock){
    let agotados = 0;
        for (let i = 0; i < stock.length; i++){
            if (stock[i] === 0) {
            agotados++;
    }
    }
    return (agotados); 
}

const productos = ["teclado","raton","monitor","auriculares","webcam"];

const precios = [45.99,19.90,189.00,59.95,34.50];


function productoMasCaro(productos,precios){
    let productomascaro = 0
        for (let i = 0; i < productos.length; i++)
    {
            if (precios[i] > precios[productomascaro]){productomascaro = i;}
    } 
    return productos[productomascaro];
}
const masCaro = productoMasCaro(productos,precios);







console.log(calcularImporteLinea(189, 2));
console.log(calcularImporteLinea(19.90, 3));
console.log("-------------------------")
console.log(calcularIVA(378, 21));
console.log(calcularIVA(189, 21));
console.log("-------------------------")
console.log(calcularDescuento(120));
console.log(calcularDescuento(50));
console.log("-------------------------")
console.log(calcularEnvio(120));
console.log(calcularEnvio(49.95));
console.log("-------------------------")
console.log(contarAgotados([10,25,3,0,7]));
console.log(contarAgotados([0,0,0,0,0]));
console.log("-------------------------")
console.log(productoMasCaro(["teclado","raton","monitor","auriculares","webcam"],[45.99,19.99,189.00,59.95,34.50]));
console.log(masCaro)
console.log("-------------------------")


console.log("-------------------------")