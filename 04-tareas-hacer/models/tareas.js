const Tarea = require("./tarea");

class Tareas {

    //Se almacenará mejor como un objeto y no como un arreglo
    _listado = { 
        //'askjjñsjdñkmskj' : 123 
        };

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