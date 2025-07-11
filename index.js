const express = require('express');
const app = express();
const path = require('path');

app.get('/signup', (request, response) => {
    response.status(200)
    response.type('text/html')
    response.sendFile(path.join(__dirname, 'index.html'))
})

app.use('/', (request, response) => {
    response.status(200)
    response.type('text/html')
    response.send("<h1>Empthy</h1>")
})

app.listen(3000)
console.log("Starting server at port 3000")