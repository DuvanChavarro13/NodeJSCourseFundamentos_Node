require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu,
        pausa,
        leerInput,
        listadoTareasBorrar
      } = require('./helpers/inquirer');

const Tareas = require('./models/tareas');

const main = async() => {
    
    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if ( tareasDB ){ //cargar tareas
        tareas.cargarTareasFromArray( tareasDB );
    }

    do {
        opt = await inquirerMenu();
        // console.log({ opt });
        switch ( opt ) {
            case '1':
                //Crear opción
                const desc = await leerInput('Descripción:');
                console.log(`Tarea "${desc}" creada con éxito`);
                tareas.crearTarea( desc );
                break;

            case '2':
                //Listar tareas 
                tareas.listadoCompleto();
                break;

            case '3':
                //Listar tareas completadas
                tareas.listarPendientesCompletadas( true );
            break;

            case '4':
                //Listar tareas pendientes
                tareas.listarPendientesCompletadas( false );
            break;

            case '6':
                //Borrar tareas
                const id = await listadoTareasBorrar( tareas.listadoArr );
                console.log({ id });
                
            break;
        
            default:
                break;
        }

        /*Se guarda la data siempre, y a pesar de seleccionar cualquier opción del switch siempre
        y cuando involucre a la base de datos */
        guardarDB( tareas.listadoArr );

        await pausa();

    } while ( opt !== '0' );

    //pausa();
}

main();  