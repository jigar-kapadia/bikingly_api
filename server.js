const express = require('express');
const bodypareser = require('body-parser');
var http = require('http');
var app = express();

//Port
var port = process.env.port || 8080;


app.use(express.static(__dirname));
app.use(bodypareser.json());
app.use(bodypareser.urlencoded({ extended: true })); // support encoded bodies
//Routes
app.post("/email",function(req,res){
    res.send(JSON.stringify(req.body));
});



app.listen(port,function(){
console.log('Server Started at Port : '+port);
});