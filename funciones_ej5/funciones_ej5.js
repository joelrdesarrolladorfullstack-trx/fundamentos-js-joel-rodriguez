function calcularImporteLinea(precio,cantidad){ 
    return precio * cantidad;
}

function calcularIVA(precio,porcentajeiva){
    return precio * (porcentajeiva/100);
}

console.log(calcularImporteLinea(189, 2));
console.log(calcularImporteLinea(19.90, 3));
console.log("-------------------------")
console.log(calcularIVA(378, 21));
console.log(calcularIVA(189, 21));

