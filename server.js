const express = require('express');
const bodypareser = require('body-parser');
const sgMail = require('@sendgrid/mail');
var http = require('http');
var app = express();

//Port
var port = process.env.PORT || 8080;
// set the view engine to ejs
app.set('view engine', 'ejs');
sgMail.setApiKey(process.env.sendgridkey);
app.use(express.static(__dirname));
app.use(bodypareser.json());
app.use(bodypareser.urlencoded({ extended: true })); // support encoded bodies

//cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


//Routes
app.post("/email",function(req,res){
  
    //res.send(JSON.stringify(req.body));
     const msg = {
        to: process.env.toEmail,
         from: req.body.from,
         subject: req.body.subject,
         text: req.body.message,
         html: '<strong>Test HTML</strong>',
       };

       res.send(msg);
     //sgMail.send(msg,true);

       //res.send(req.body.from + ' --- ' +  req.body.subject + ' ---- ' + req.body.message);
});

app.listen(port,function(){
console.log('Server Started at Port : '+port)
});
