require('dotenv').config() //Para agregar variables de entorno desde un archivo .env

require('colors');
const { leerInput, 
    inquirerMenu,
    pausa,
    listarLugares
 } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

//console.log( process.env );

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

                //Seleccionar el lugar por id
                const id = await listarLugares( lugares ); 
                if ( id === '0' ) continue; //Validación para que continue el ciclo si selecciona opción cero

                const lugarSel = lugares.find( l => l.id === id );

                //Guardar en DB
                busquedas.agregarHistorial( lugarSel.nombre );

                //Datos del clima
                const clima = await busquedas.climaLugar( lugarSel.lat, lugarSel.lng );

                //Mostrar resultados
                console.clear();
                console.log( '\nINFORMACIÓN DE LA CIUDAD\n'.green );
                console.log( 'Ciudad: ' + `${ lugarSel.nombre }`.green );
                console.log( 'Latitud: ' + `${ lugarSel.lat }`.green );
                console.log( 'Longitud: ' + `${ lugarSel.lng }`.green );
                console.log( 'Temperatura: ' + `${ clima.temp }`.green );
                console.log( 'Mínima: ' + `${ clima.temp_min }`.green );
                console.log( 'Máxima: ' + `${ clima.temp_max }`.green );
                console.log( 'Descripción del clima: ' + `${ clima.desc }`.green);
            break;

            case 2:
                busquedas.historialCapitalizado.forEach ( (lugar, i) =>{
                    const idx = `${ i +1 }.`.green;
                    console.log( `${ idx } ${ lugar }`);
                }); 
                
            break;
        }
    
        await pausa();
        
    } while ( opt !== 0 );

    console.log( 'Se terminó el programa' );

}

main();