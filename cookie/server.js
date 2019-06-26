const http = require('http')
const fs = require('fs')

http.createServer(function (request, response) {
  console.log('request conme', request.url)

  if (request.url === '/') {
    const html = fs.readFileSync('index.html', 'utf8')
    response.writeHead(200, {
      'Content-Type': 'text/html',
      'Set-Cookie': ['id=123; max-age=10', 'ad=321', 'qq=456; HttpOnly']
    })
    response.end(html)
  }
}).listen(6588)

console.log('6588')