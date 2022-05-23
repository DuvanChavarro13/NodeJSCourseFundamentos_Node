
//Función normal
//function sumar( a, b = 10 ){
function sumar( a, b ){
    return a + b;
}
/*Se debe tener cuidado al no enviar los parámetros correspondientes, ya que si ejecutaría
 un NaN, es decir not a number, esto pasa porque debe de haber un valor undefined, es 
 decir, no especificado o no colocado en los argumentos de la función
*/ 
console.log(sumar(5, 10));

//FUNCIONES DE FLECHA
/*Las funciones de flecha, tienen muchas caracteristicas y ventajas respecto a las otras 
funciones*/
const Sumar = ( a, b ) => {
    return a + b;
}
console.log( Sumar(5, 5) );

//Cuando el cuerpo de la función es de una sola línea, se puede escribir de esta manera
const Suma = ( a, b ) => a + b;
console.log( Suma(5, 1) );

const saludar = () => 'Holaaa';
console.log( saludar() );