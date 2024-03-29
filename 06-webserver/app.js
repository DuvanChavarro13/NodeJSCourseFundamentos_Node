const express = require('express')
const app = express()
const port = 8080; 

//Servir contenido estático
app.use( express.static('public') );

/* Esta función nunca se va a ejecutar, porque se ejecutó primero el midelware
app.get('/', (req, res) => {
  res.send('Home page')
})
*/

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva ruta')
})

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
})

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})