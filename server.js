var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')

var serve = serveStatic('public', {'index': ['index.html']})

var server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res))
})

server.listen(9000, function onListen () {
  console.log('Listening at http://localhost:9000')
})
