var path = require('path');
var express = require('express');

var clientPath = path.join(__dirname, "../client");
var app = express();

app.use(express.static(clientPath));

app.listen(process.env.PORT || 3000); //enviro variable...if port enviro not available will run on 30000
//amazon will specify port, will change, bad gateway message check here