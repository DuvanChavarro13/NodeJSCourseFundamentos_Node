const fs = require('fs');
const colors = require('colors');
const { number } = require('yargs');

const crearArchivo = async( b = 5, listar = false, h ) => {
    
    try {
        let consola, salida = '';
        
        for (let i = 1; i <=h ; i++) {
            consola += `${b} ${ 'x'.green } ${i} ${ '='.green } ${b*i}\n` ;
            salida += `${b} x ${i} = ${b*i}\n` ;
        }

        if ( listar ){
            console.log('=============='.green);
            console.log('TABLA DEL:'.green, colors.blue(b));
            console.log('=============='.green);
            console.log( consola );
        }

        //Uso de la función writeFileSyinc
        fs.writeFileSync( `tabla-${b}.txt`, salida);

        return `Tabla-${b}.txt`;
        
        /*Uso de la función writeFile()
        fs.writeFile( `tabla-${b}.txt`, salida, ( err ) => {
            if ( err ) throw err; 
            console.log(`Tabla del ${b} creada con éxito`);
        } )
        */
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
    //crearArchivo: crearArchivo //La función crearArchivo tiene el mismo nombre que el objeto
}