const http = require('http')

http.createServer(function (request, response) {
  console.log('request conme', request.url)

  response.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Test-Cors',
    'Access-Control-Allow-Methods': 'POST, PUT'
  })

  response.end('6587')

}).listen(6587)

console.log('6587')