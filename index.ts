import express = require('express');

var app = express();
app.get('/', function (req, resp) {
    resp.send('aaa');
})
app.listen(9000, () => {
    console.log('server');
});