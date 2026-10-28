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