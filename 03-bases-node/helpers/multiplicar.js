const fs = require('fs');

const crearArchivo = ( b = 5 ) => {
    //Inicio del programa
    console.log(`TABLA DEL ${b} `);
    let salida = '';
    for (let i = 1; i <=10 ; i++) {
        salida += `${b} x ${i} = ${b*i}\n` ;
    }
    console.log( salida );
    //Uso de la función writeFileSyinc
    fs.writeFileSync( `tabla-${b}.txt`, salida);
    console.log(`Tabla del ${b} creada con éxito`);

    /*Uso de la función writeFile()
    fs.writeFile( `tabla-${b}.txt`, salida, ( err ) => {
        if ( err ) throw err; 
        console.log(`Tabla del ${b} creada con éxito`);
    } )
    */
}

module.exports = {
    crearArchivo
    //crearArchivo: crearArchivo //La función crearArchivo tiene el mismo nombre que el objeto
}