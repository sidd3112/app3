// i am calling moduels
let express = require("express");
let http = require('http');
let ejs = require('ejs');

//creating port number
let port = process.env.port || 2500;

//create app object fo express
let app = new express();

//seting view engine
app.set('view engine', 'ejs');

//using public folder with the name of /assets
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/img", express.static(__dirname + "/public/img"));
app.use("/js", express.static(__dirname + "/public/js"));

//route
app.use('/', require('./routes/mainpagesroutes'));


http.createServer(app).listen(port, () => {
    console.log(" hi my port is " + port);
});