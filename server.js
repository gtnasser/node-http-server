// simple 8080 port http server
// usage: node server [PORT]

const PORT = process.argv[2] || process.env.PORT || 8080
var http = require('http')

function getRandomInt(max) {
  return 1 + Math.floor(Math.random() * (max-1))
}

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end(`Hello World! #${getRandomInt(250)}`)
  console.log(`Request from ${req.headers['x-forwarded-for'] || req.socket.remoteAddress}`)
}).listen(PORT, 
  () => console.log(`Listening on port ${PORT}`)
)