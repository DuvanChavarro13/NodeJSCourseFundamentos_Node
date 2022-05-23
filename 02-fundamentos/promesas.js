// ESTO OFRECE UNA SOLUCIÓN A EVITAR EL CALLBACK-HELL {INFIERNO DEL CALLBACK}
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

// FUNCIONES
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