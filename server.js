var express = require('express');
var app = express();

app.get('/', function(request, response) {
//logger.info('Console and File logging with Winston! Request from ' + req.ip + ' at ' + new Date() );
response.send('Server: ' + os.hostname() + '<BR><BR>From: ' + request.ip + '<BR><BR>At: ' + new Date());
});

app.use(express.static('public'));

app.listen(80,'subdomain.domain.com');
console.log('Listening on port 80');
