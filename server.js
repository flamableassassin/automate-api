console.log("Starting...")
//server//
//DON'T EDIT//
var express = require('express');
var app = express();
var server = app.listen(3000,listening);
app.use(express.static('public'));
//--------------------//
//required stuff//
var localIpV4Address = require("local-ipv4-address");
var notifier = require('node-notifier/index');
var path = require('path');
//-----------------//
function listening(){
  console.log("Listening on port: 3000")
  localIpV4Address().then(function(ipAddress){
    console.log("Ip: "+ipAddress);
});
}
//text//
app.get("/text/:num/:text",text)
function text (request,response){
  console.log(request.ip+" connected!(Notification)")
  var data = request.params;
  var text= data.text
  var number = data.num
  response.send("test")

notifier.notify(
  {
    message: text,
    wait: false,
    title:"Message From: "+number,
    sound: true
  },
)
}
app.get("/ping",ping)
function ping(request,response){
  console.log(request.ip+" connected!(Ping)")
  response.send("pong!")
}
