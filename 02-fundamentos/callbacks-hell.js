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
        nombre: 3500
    },
    {
        id: 2, 
        nombre: 2000
    }
]; 

// Función para traer la información de un empleado
const getEmpleado = ( id, callback ) => {
    //Aquí guardo en una variable, el objeto completo buscado por id exactamente igual definido en el arreglo
    const empleado = empleados.find( (e) => e.id === id )
    
    if ( empleado ){
        //El null significaría de que no hay ningun error, y por lo tanto la condición del error nunca se va a ejecutar
        callback( null, empleado.nombre );
    }else{
        callback(`Empleado con id ${ id } no existe`);
    }
}

// Función para traer información del salario
const getSalario = ( id, callback) => {
    const salario = salarios.find( (s) => s.id === id )
    if (salario){
        callback( null, salario.nombre );
    }else{
        callback ( `Salario inexistente con id ${id}` );
    }
}

//---------------------------------------------------------------------------------------------

const id = 2;

getEmpleado( id, ( err, empleado ) => {
    if ( err ){
        console.log('ERROR!');
        return console.log(err);
    }
    
    getSalario( id, (err, salario) => {
        if ( err ){
            return console.log(err);
        }
        console.log(`El empleado ${empleado} tiene un salario de: ${salario}`);
    })
})

/* NOTA: El Calback Hell puede ser muy enredado y dificil de leer, todo esto, es lo que
precisamente se debe evitar a toda costa. */






