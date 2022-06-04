const Tarea = require("./tarea");


class Tareas {

    _listado = {};

    constructor(){
        this._listado = {};
    }

    crearTarea( desc = '' ) {

        const tarea = new Tarea( desc );
        //De esta forma se insertan datos en el objeto listado
        this._listado[tarea.id] = tarea;

    }

}

module.exports = Tareas;