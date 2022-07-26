require('colors');
const { leerInput, 
    inquirerMenu,
    pausa
 } = require('./helpers/inquirer');


const main = async() => {

    let opt; 
    
    do {
        opt = await inquirerMenu();
        
        switch ( opt ) {
            case 1:
                console.log( "Seleccionó la opción 1" );
                break;

            case 2:
                console.log( "Seleccionó la opción 2" );
                break;
        }
    
        await pausa();
        
    } while ( opt !== 0 );

    console.log( 'Se terminó el programa' );

}

main();