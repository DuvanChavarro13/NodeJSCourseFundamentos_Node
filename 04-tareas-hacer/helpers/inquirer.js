const inquirer = require('inquirer');
const ListPrompt = require('inquirer/lib/prompts/list');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
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
            validate( value ){
                if( value.length === 0 ){
                    return "Por favor, ingrese un valor";
                }
                return true; 
            }
        }
    ];

    /*El inquirer.prompt regresa un objeto (question ), por eso es que se desestructura solo la 
    descripción para mostrar al usuario*/
    const { desc } = await inquirer.prompt(question); 
    return desc;
}

//Se reciben las tareas como un arreglo
const listadoTareasBorrar = async( tareas = [] ) => {
    // Función .map() para obtener un nuevo arreglo 
    const choices = tareas.map( (tarea, i) => {
        const idx = `${i + 1}.`.green;
        return {
            value: tarea.id,
            name: `${ idx } ${ tarea.desc }`
        }
    });
    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices 
        }
    ]
    const { id } = await inquirer.prompt( preguntas );
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


module.exports = {
    inquirerMenu,
    pausa, 
    leerInput,
    listadoTareasBorrar
}   