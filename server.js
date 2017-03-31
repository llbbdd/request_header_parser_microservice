var express = require('express');
var ip = require("ip");
var os = require("os");

var port = 8080;

var app = express();

app.get('/', function(req, res) {
    var ipAddress = ip.address();
    var language = req.headers["accept-language"];
    var software = os.platform();
    
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ "ipaddress": ipAddress, "language": language, "software": software}));
});

app.listen(port, function () {
    console.log('Request Header Parser Microservice app listening on port ' + port);
});