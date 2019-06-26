const http = require('http')
const fs = require('fs')

http.createServer(function (request, response) {
  console.log('request conme', request.url)

  if (request.url === '/') {
    const html = fs.readFileSync('index.html', 'utf8')
    response.writeHead(200, {
      'Content-Type': 'text/html'
    })
    response.end(html)
  }

  if (request.url === '/script.js') {
    const etag = request.headers['if-none-match'];
    if (etag === '777') {
      response.writeHead(304, {
        'Content-Type': 'text/javascript',
        'Cache-Control': 'max-age=20000, no-store',
        'Last-Modified': '123',
        'Etag': '777'
      })
      response.end('12')
    } else {
      response.writeHead(200, {
        'Content-Type': 'text/javascript',
        'Cache-Control': 'max-age=20000, no-store',
        'Last-Modified': '123',
        'Etag': '777'
      })
      response.end('console.log("script loade tp")')
    }

  }

}).listen(6588)

console.log('6588')