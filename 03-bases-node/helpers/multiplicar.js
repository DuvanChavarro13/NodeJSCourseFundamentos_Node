const fs = require('fs');

const crearArchivo = async( b = 5, listar = false ) => {
    
    try {
        let salida = '';

        for (let i = 1; i <=10 ; i++) {
            salida += `${b} x ${i} = ${b*i}\n` ;
        }

        if ( listar ){
            console.log(`TABLA DEL ${b} `);
            console.log( salida );
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