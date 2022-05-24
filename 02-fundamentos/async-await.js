const empleados = [
    {
        id: 1, 
        nombre: 'Duvan'
    },
    {
        id: 2, 
        nombre: 'David'
    },
    {
        id: 3, 
        nombre: 'Daniel'
    }
]; 

const salarios = [
    {
        id: 1, 
        salario: 1000
    },
    {
        id: 2, 
        salario: 500
    }
]; 

// FUNCIONES
const getEmpleado = ( id ) => {
    return new Promise( ( resolve, reject ) => {
        //Buscar el empleado dentro del arreglo
        const empleado = empleados.find( (e) => e.id === id )?.nombre;
        ( empleado ) 
            ? resolve( empleado ) //Regresar el empleado en el resolve si todo sale bien
            : reject( `No existe empleado con id ${id}` ) //De caso contrario hacer el reject
        }
    ); /*La promesa internamente va a ejecutar un callback, ese callback tiene dos argumentos
           que se le envía que son en resolve y el reject, el primero se llama cuando todo se 
           ejecuta correctamente, y el segundo, se ejecuta si sucede un error*/
}

const getSalario = ( id ) => {
    return new Promise( ( resolve, reject ) => {
        const salario = salarios .find( (s) => s.id === id)?.salario;
        ( salario )
            ? resolve( salario )
            : reject( `No hay ningun salario para el id ${id}` ) 
    } );  
}

// -------------------------------------------------------------------------------------------
/* ASYNC - AWAIT -> Son terminos populares que rodea el mundo de las promesas
Cuando se le agrega el async a una función es TRANSFORMAR una función para que regrese
una PROMESA
NOTA: La palabra reservada: await se puede escribir solo en el cuerpo de una función asíncrona*/
const getInfoUsuario = async( id ) => { //Función asíncrona agregando el async que retorna una promesa
    try {
        const empleado = await getEmpleado( id );
        const salario = await getSalario( id );
        return `El salario del empleado ${empleado} es de ${salario}`;   
    } catch (error) {
        throw error;
    } 
}

const id = 2; 
getInfoUsuario( id )
    .then( msg => {
        console.log('TODO BIEN!');
        console.log( msg ) 
    })
    .catch( err => {
        console.log('TODO MAL!');
        console.log( err ) 
    });






