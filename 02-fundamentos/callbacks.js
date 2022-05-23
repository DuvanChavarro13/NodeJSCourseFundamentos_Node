//Un Callback no es mas que una fuunción que se va a ejecutar despues en cierto punto del tiempo

// setTimeout(); //Función global que ejecuta un callback en cierto momento del tiempo;
setTimeout( function(){
    console.log('Holaaaa');
}, 1000 ); //Este setTimeout va a ejecutar una función en un segundo


// ALGO MÁS INTERESANTE
const getUsuarioById = ( id, callback ) => { //Este callback como argumento es eventual
    const usuario = {
        id, 
        nombre: 'Duvan'
    }
    setTimeout( () => {
        callback(usuario) 
    }, 1500);
}

getUsuarioById( 10, ( usuario )=>{
    console.log( usuario.id );
    console.log( usuario.nombre.toUpperCase() );
} ); 

// Los callbacks no son mas que un función que se manda como argumento