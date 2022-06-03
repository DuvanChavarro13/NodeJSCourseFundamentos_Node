const inquirer = require('inquirer');
const ListPrompt = require('inquirer/lib/prompts/list');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: ['opt1', 'opt2', 'opt3']
    }
]

const inquirerMenu = async() => {

    console.clear();
    console.log('======================'.green);
    console.log('Seleccione una opción'.green);
    console.log('======================\n'.green);

    //inquirer trabaja en base a promesas, por lo tanto puedo hacer el await
    await inquirer.prompt([])

}

module.exports = {
    inquirerMenu
}