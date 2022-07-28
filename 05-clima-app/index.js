require('dotenv').config() //Para agregar variables de entorno desde un archivo .env

require('colors');
const { leerInput, 
    inquirerMenu,
    pausa,
    listarLugares
 } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

//console.log( process.env.MAPBOX_KEY );

const main = async() => {

    const busquedas = new Busquedas();
    let opt; 
    
    do {
        opt = await inquirerMenu();
        
        switch ( opt ) {
            case 1:
                //Mostrar mensaje para que la persona escriba
                const termino = await leerInput( 'Ciudad: ' );

                //Buscar lugares
                const lugares = await busquedas.ciudad( termino );

                //Seleccionar el lugar
                const id = await listarLugares( lugares ); 
                const lugarSel = lugares.find( l => l.id === id );
                console.log( lugarSel );

                //Datos del clima

                //Mostrar resultados
                console.log( '\nInformación de la ciudad\n'.green );
                console.log( 'Ciudad: ', );
                console.log( 'Lat: ', );
                console.log( 'Lng: ', );
                console.log( 'Temperatura: ', );
                console.log( 'Mímnima: ', );
                console.log( 'Máxima: ', );
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