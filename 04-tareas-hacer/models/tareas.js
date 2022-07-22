const Tarea = require("./tarea");

class Tareas {

    //Se almacenará mejor como un objeto y no como un arreglo
    _listado = { 
        //'askjjñsjdñkmskj' : 123 
        };
    
    constructor(){
        this._listado = {};
    }

    //Método
    crearTarea( desc = '' ) {
        const tarea = new Tarea( desc );
        /*SI QUIERO HACER REFERENCIA A UNA PROPIEDAD DEL OBJETO LO COLOCO ENTRE LLAVES
        Ejemplo
        this._listado['askjjñsjdñkmskj'] //El id siempre será diferente gracias a UUID, y eso 
                                           apunta a la tarea */
        this._listado[tarea.id] = tarea;
    }
    
    //Convertir de objeto a arreglo para mostrar //GETTER
    get listadoArr() {
        const listado = [];
        //Extraer cada una de las llaves que se encuentren en un objeto
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push( tarea ); 
        })
        return listado;
    }

    cargarTareasFromArray( tareas = [] ) {
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });
   }

    listadoCompleto() {
        console.log('');
        this.listadoArr.forEach( (tarea, i) => {
            const idx = `${i + 1}.`.green;
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn ) ? 'Completado'.green : 'Pendiente'.red;

            console.log(`${ idx } ${ desc } :: ${ estado }`);
        });
    }

    listarPendientesCompletadas( completadas = true) {
        console.log('');
        let contador = 0;
        this.listadoArr.forEach( (tarea) => {
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn ) ? 'Completado'.green : 'Pendiente'.red;
            if ( completadas ){
                //mostrar completadas
                if ( completadoEn ){
                    contador += 1;
                    console.log(`${ (contador + '.').green } ${ desc } :: ${ completadoEn.green }`);
                }
            }else{
                //mostrar pendientes
                if ( !completadoEn ){
                    contador += 1;
                    console.log(`${ (contador + '.').green } ${ desc } :: ${ estado }`);
                }
            }
        });
    }

    borrarTarea( id = '' ) {
        if ( this._listado[id] ){
            delete this._listado[id];
        }
    }

    toggleCompletadas( ids = [] ){

        ids.forEach( id => {
            const tarea = this._listado[id];  //Extraer esa propiedad por id del objeto
            if ( !tarea.completadoEn ) { //Si no tiene nada, es decir, si está en null
                tarea.completadoEn = new Date().toISOString()
            }
        });

        //Ahora marcar como NO Completadas, las tareas que vengan en ese arreglo
        this.listadoArr.forEach( tarea => {
            /*Si en el arreglo ids no incluye las tareas que se registran entonces, 
            se modifica su estado se completado a null*/
            if ( !ids.includes( tarea.id ) ){
                this._listado[tarea.id].completadoEn = null;
            }
        });
    }

}

module.exports = Tareas;