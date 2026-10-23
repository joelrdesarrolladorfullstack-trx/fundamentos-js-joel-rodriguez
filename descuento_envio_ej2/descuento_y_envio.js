const importe = 50 ;
let descuento;

if (importe > 100){descuento = 10;}
else if (importe >= 50){descuento = 5;}
else { descuento = 0;
}
const total =importe - importe * (descuento/100);
let envio = 4.95;
if (total >= 50) {envio = 0}


const totalapagar = total + envio;