const { leerInput } = require('./helpers/inquirer');


const main = async() => {
    const texto = await leerInput( '¿Qué desea hacer? ' );
    console.log( texto );
}

main();