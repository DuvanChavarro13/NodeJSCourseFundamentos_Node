require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu,
        pausa,
        leerInput
      } = require('./helpers/inquirer');

const Tareas = require('./models/tareas');

const main = async() => {
    
    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if ( tareasDB ){
        //Establecer las tareas
    }

    do {

        opt = await inquirerMenu();
        console.log({ opt });
        switch ( opt ) {
            case '1':
                //Crear opción
                const desc = await leerInput('Descripción:');
                console.log(`Tarea "${desc}" creada con éxito`);
                tareas.crearTarea( desc );
                break;

            case '2':
                //Listar tareas 
                console.log(tareas.listadoArr);
                break;
        
            default:
                break;
        }

        /*Se guarda la data siempre, y a pesar de seleccionar cualquier opción del switch siempre
        y cuando involucre a la base de datos */
        //guardarDB( tareas.listadoArr );

        await pausa();

    } while ( opt !== '0' );

    //pausa();
}

main(); 