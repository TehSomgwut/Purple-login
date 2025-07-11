const http = require('http')
const fs = require('fs')
const server = http.createServer(function(request, response) {
    let url = request.url
    switch(url) {
        case '/' : response.write('<h1>Empthy</h1>'); response.end(); break;
        case '/signup/' : fs.readFile(__dirname + '/index.html', 'UTF-8', (err, data) =>{
            if(err) {
                response.writeHead(200, {'content-type' : 'text/html'})
                response.end('<h1>Error<h1>', err.message)
            }
            else {
                response.writeHead(200, {'content-type' : 'text/html'})
                response.end(data)
            }
        }); break;
        default:
            response.writeHead(404, {'content-type' : 'text/html'})
            response.end("No"); break;
    }
})

server.listen(3000)
console.log("Server is running on port 3000")