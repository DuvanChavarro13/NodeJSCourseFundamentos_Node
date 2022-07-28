const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: 1,
                name: `${'1.'.green} Buscar ciudad`
            },
            {
                value: 2,
                name: `${'2.'.green} Historial`
            },
            {
                value: 0,
                name: `${'0.'.green} Salir`
            }
        ]
    }
]

const inquirerMenu = async() => {

    console.clear();
    console.log('========================='.green);
    console.log('  Seleccione una opción'.white);
    console.log('=========================\n'.green);

    //inquirer trabaja en base a promesas, por lo tanto puedo hacer el await
    const { opcion } = await inquirer.prompt(preguntas);
    return opcion;
}

const pausa = async() =>{

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.green} para continuar`
        }
    ];
    console.log('\n');
    await inquirer.prompt(question);
}

const leerInput = async( message ) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ){ //--> Esto es para que mande si o si un valor en la descripción
                if( value.length === 0 ){
                    return "Por favor, ingrese un valor"; //--> Error
                }
                return true; //--> Validación pasó
            }
        }
    ];
    /*El inquirer.prompt regresa un objeto (question ), por eso es que se desestructura solo la 
    descripción para mostrar al usuario*/
    const { desc } = await inquirer.prompt(question); 
    return desc;
}


const listarLugares = async( lugares = [] ) => {
    const choices = lugares.map( (lugar, i) => {
        const idx = `${i + 1}.`.green;
        return {
            value: lugar.id,
            name: `${ idx } ${ lugar.nombre }`
        }
    });

    //Para agregar un valor demás al arreglo
    choices.unshift({
        value: '0',
        name: `${'0.'.green} Cancelar`
    })

    const pregunta = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccione lugar: ',
            choices 
        }
    ]
    const { id } = await inquirer.prompt( pregunta );
    return id;  
}


const confirmar = async( message ) => {
    const pregunta = [
        {
            type: 'confirm',
            name: 'ok', //Lo que voy a recibir
            message
        }
    ]
    const { ok } = await inquirer.prompt( pregunta );
    return ok;
}

//Mostrar listado para completar tareas
const mostrarListadoChecklist = async( tareas = [] ) => {
    // Función .map() para obtener un nuevo arreglo 
    const choices = tareas.map( (tarea, i) => {
        const idx = `${i + 1}.`.green;
        return {
            value: tarea.id,
            name: `${ idx } ${ tarea.desc }`,
            checked: ( tarea.completadoEn ) ? true : false
        }
    });

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione ',
            choices 
        }
    ]
    const { ids } = await inquirer.prompt( pregunta );
    return ids;  
}

module.exports = {
    inquirerMenu,
    pausa, 
    leerInput,
    listarLugares,
    confirmar,
    mostrarListadoChecklist
}   