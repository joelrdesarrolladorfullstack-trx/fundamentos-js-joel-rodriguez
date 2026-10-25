const productos = ["teclado","raton","monitor","auriculares","webcam"];

const precios = [45.99,19.99,189.00,59.95,34.50];

const stock = [100,10,30,0,1000];

let buscador = "webcam";
let posicion = -1;

for(let i = 0; i < productos.length; i++) {
    if(productos[i] === buscador){
    posicion = i;
    }
}
    if (posicion === -1){
    console.log(`${buscador} posicion -1 no existe en el catalogo`);
} else {
    console.log(`${buscador} esta en la posicion ${posicion} precio: ${precios[posicion].toFixed(2)} €.  stock: ${stock[posicion]}`);
}