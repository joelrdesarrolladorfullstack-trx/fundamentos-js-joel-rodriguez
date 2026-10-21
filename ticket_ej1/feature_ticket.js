const producto = 'mini pc';
const precio = 250;
const cantidad = 2;
const porcentajeiva = 21;

const subtotal = precio * cantidad;
const iva = subtotal * (porcentajeiva/100);
const total = subtotal + iva;