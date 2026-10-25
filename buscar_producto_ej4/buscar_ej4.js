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