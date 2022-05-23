
const deadpool  = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    //edad: 50,
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

console.log(deadpool.getNombre());

//Con la desestructuracion es evitar escribir tanto codigo para extraer simples constantes de un objeto
const { nombre, apellido, poder, edad=0} = deadpool; // Este es el objeto que tiene todas las propiedades, y entre las llaves voy a tener las propiedades que quiero extraer
console.log(nombre, apellido, poder, edad);

// OTRO USO DE LA DESDESTRUCTURACIÓN //Con Funciones 
// Puedo desestructurar el objeto directamente en los argumentos, como en el siguiente caso
// Se va a saber que es una desestructuración de un objeto porque está entre las llaves {}
function imprimeHeroe( { nombre, apellido, poder, edad=0 } ){
    //Aquí habrá una diferencia si le redefino una variable en la función, que sería una variable de función
    nombre = 'Fernando';
    console.log(nombre, apellido, poder, edad);
}
imprimeHeroe( deadpool );

// -------------------------------------------------------------------------------------------------------------
// TAMBIEN SE PUEDE DESESTRUCTURAR DESDE LOS ARREGLOS 
//Forma normal
const heroes = ['Deadpool', 'Superman', 'Batman'];
const heroe1 = heroes[0];
const heroe2 = heroes[1];
console.log(heroe1, heroe2);

//Con Desestructuracion
const [ , , h3] = heroes;
//console.log(h1, h2, h3);
//Para imprimir solo un objeto del arreglo en específico
console.log(h3);
