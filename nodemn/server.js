var port = process.env.PORT || 8000
var http = require('http')
var url = require('url')

http.createServer(function(request, response) {
  path = url.parse(request.url).pathname

  // only serve index
  if (path === '/' || path === '/index.html') {
    renderIndex(response)
  } else {
    render404(response)
  }

  // common response
  console.log(response.statusCode, request.url)
  response.end()
}).listen(port)

function renderIndex(response) {
  response.statusCode = 200
  response.write('<html>')
  response.write('<head>')
    response.write('<meta charset="utf-8">')
    response.write('<title>Hello, NodeMN!</title>')
    response.write('<link rel="stylesheet" href="/application.css">')
  response.write('</head>')
  response.write('<body>')
    response.write('<header>')
    response.write('<h1>Hello, <a href="http://www.meetup.com/NodeMN/">NodeMN</a></h1>')
    response.write('</header>')
    response.write('<article>')
      response.write('<h2>Thank you for your attention.</h2>')
      response.write('<img src="nodejs-green.png"/>')
    response.write('</article>')
    response.write('<footer>')
      response.write('<p>Feel free to check out <a href="https://github.com/pbyrne/gentle-intro-sites">the source</a> that built this page.</p>')
    response.write('</footer>')
  response.write('</body>')
}

function render404(response) {
  response.statusCode = 404
}
