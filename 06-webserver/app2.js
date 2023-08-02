const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Home page')
})

app.get('/hi', (req, res) => {
    res.send('Hi, en su respectiva ruta')
})

app.get('*', (req, res) => {
    res.send('404 | Página no encontrada')
})

app.listen(8080)