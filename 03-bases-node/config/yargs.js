const { option } = require('yargs');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default: 10,
        describe: 'Límite de la multiplicación'
    })
    .check((argv, option) => {
        if (isNaN(argv.b) || isNaN(argv.h)) {
            throw 'La base y el límite de la multiplicación debe ser un número'
        }
        return true
    })
    .argv;

module.exports = argv;