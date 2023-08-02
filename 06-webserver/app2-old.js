
const http = require('http');

/*Request ( req ) es lo que se está solicitando de la URL (headers, argumentos, etc)
  Response ( res ) es lo que mi servidor le va a responder al cliente*/
http.createServer( (req, res) => {

    res.writeHead(200, { 'Content-Type':'application/json' }); //Llega la data con un status exitoso, y dentro del contenido, le especifico en que formato llega

    const persona = {
        id: 1,
        nombre: 'Duvan'
    }


    res.write( JSON.stringify(persona) );
    res.end();
})
.listen( 8080 );

console.log('Escuchando el puerto', 8080);
