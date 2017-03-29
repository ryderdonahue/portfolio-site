var http = require('http');
var qs = require('querystring');

var port = 8117;

var server = http.createServer(function (request, response) {
    console.log('incomming request');
    if (request.method == 'POST') {
        console.log('POST:');
        var body = '';

        request.on('data', function (data) {
            body += data;

            // Too much POST data, kill the connection!
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6)
                request.connection.destroy();
        });

        request.on('end', function () {
            var post = qs.parse(body);
            
            console.log(JSON.stringify(post));
            // use post['blah'], etc.
        });
    }

    console.log(request.method);
    response.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers' : 'Origin, Content-Type, X-Auth-Token',
    });
    response.end(JSON.stringify({ message: 'not implemented' }));
    });

    if (port) {
        server.listen(port);
        console.log('listening on port:' + port)
    }

    return server;


