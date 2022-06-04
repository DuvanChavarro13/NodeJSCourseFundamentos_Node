const { v4 : uuidv4 } = require('uuid');

//Clases
class Tarea {

    id = '';
    desc = ''; 
    completadoEn = null; //Esto es para grabar la fecha, si es null es porque no hay fecha, pero si tiene algo significa que está completado

    constructor ( desc ) {

        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn = null;

    }
}

module.exports = Tarea;