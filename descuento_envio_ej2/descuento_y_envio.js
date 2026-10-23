const importe = 120 ;
let descuento;

if (importe > 100){descuento = 10;}
else if (importe >= 50){descuento = 5;}
else { descuento = 0;
}
const total =importe - importe * (descuento/100);
let envio = 4.95;
if (total >= 50) {envio = 0}


const totalapagar = total + envio;

console.log (importe)
console.log (importe *(descuento/100))
console.log (total)
console.log (envio === 0 ? "gratis " : envio)
console.log (totalapagar)