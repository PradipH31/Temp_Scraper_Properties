"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get('/', function (req, resp) {
    resp.send('aaa');
});
app.listen(9000, function () {
    console.log('server');
});
