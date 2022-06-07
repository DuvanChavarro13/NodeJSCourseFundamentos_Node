const Tarea = require("./tarea");

class Tareas {

    //Se almacenará mejor como un objeto y no como un arreglo
    _listado = { 
        //'askjjñsjdñkmskj' : 123 
        };
    

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

    constructor(){
        this._listado = {};
    }

    crearTarea( desc = '' ) {

        const tarea = new Tarea( desc );

        /*SI QUIERO HACER REFERENCIA A UNA PROPIEDAD DEL OBJETO LO COLOCO ENTRE LLAVES
        Ejemplo
        this._listado['askjjñsjdñkmskj'] //El id siempre será diferente gracias a UUID, y eso 
                                           apunta a la tarea */
        this._listado[tarea.id] = tarea;

    }

}

module.exports = Tareas;