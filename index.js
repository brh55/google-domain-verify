'use strict';
var express = require('express'),
    app     = express(),
    port    = process.env.PORT || 5000;

app.use('/', express.static(__dirname + '/html'));
app.listen(port, function () {
    console.log('Domain Verification Server Running on:', port);
});
