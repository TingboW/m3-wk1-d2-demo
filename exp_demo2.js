var express = require('express');
var app = express();

app.length('/hello', function(req, res){
    res.send("Hello world!");
})


app.listen(3000);


