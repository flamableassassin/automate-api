console.log("Starting...")
//server//
//DON'T EDIT//
var express = require('express');
var app = express();
var server = app.listen(3000, listening);
//                      ^^if changed will needed to be changed in flow//
app.use(express.static('public'));
//--------------------//
//required stuff//

var fs = require("fs");
var localIpV4Address = require("local-ipv4-address");
const notifier = require('node-notifier');
var path = require('path');
//-----------------//
//starting server//
function listening() {
  localIpV4Address().then(function(ipAddress) {
    //writing ip and port
    console.log(ipAddress)
    fs.writeFile('public/log.txt', "", 'utf8',write);
    fs.writeFile('public/settings.txt', "Ip: "+ipAddress+"\nPort: 3000", 'utf8',write);
    notifier.notify({
      'title': 'Server started up',
      'message': "IP: "+ipAddress+"\nPort: 3000",
      'icon': 'Files/server.png',
      'sound': 'ding.mp3',
      'wait': true
    });
  });

}
//-------------------------------------------//
//text income//
app.get("/text/:num/:text", text)

function text(request, response) {
  var data = request.params;
  var text = data.text
  var number = data.num
  response.send("ty")
  notifier.notify({
    'title': 'Server started up\n',
    'message': "Message From: " + number,
    'icon': 'Files/message.png',
    'sound': 'ding.mp3',
    'wait': true
  });

  //logs
  var today = new Date();
  var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()+"-"+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  fs.appendFileSync('public/log.txt', date+"-"+number+"-"+text+"\n", 'utf8',write);

}
function write(err){
  console.log("Written to a file")
}
//Ping//
app.get("/ping", ping)

function ping(request, response) {
  var today = new Date();
  var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()+"-"+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  fs.appendFileSync('public/log.txt', date+"-"+request.ip+"-Connected!"+"\n", 'utf8',write);
  response.send("pong!")
}
