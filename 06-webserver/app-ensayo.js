
const http = require('http'); // Paquete propio de NodeJs

/*Request ( req ) es lo que se está solicitando de la URL (headers, argumentos, etc)
  Response ( res ) es lo que mi servidor le va a responder al cliente*/
http.createServer( (req, res) => { 

    res.writeHead(200, {'Content-Type': 'application/json'} ); //Puedo responder mediente los headers
    //res.writeHead(200, {'Content-Type': 'application/csv'} );

    const persona = {
        id: 1,
        nombre: 'Duvan'
    }

    res.write( JSON.stringify(persona));
    res.end();

})
.listen( 8080 );

console.log('Escuchando el puerto', 8080);
