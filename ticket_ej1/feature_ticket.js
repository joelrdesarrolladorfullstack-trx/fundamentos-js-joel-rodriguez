const producto = 'mini pc';
const precio = 189;
const cantidad = 2;
const porcentajeiva = 21;

const subtotal = precio * cantidad;
const iva = subtotal * (porcentajeiva/100);
const total = subtotal + iva;

console.log(`Producto: ${producto}`);
console.log(` ${cantidad} x ${precio.toFixed(2)}€ `);
console.log(`Subtotal: ${subtotal.toFixed(2)}€`);
console.log(`IVA (${porcentajeiva}%): ${iva}€`);
console.log(`Total a pagar: ${total.toFixed(2)}€`);