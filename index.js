var express = require("express");
var env = require('dotenv').config();

// create object of express
var app = express();

// accessing port from .env file
var port = process.env.port || '8000';

//database (mongodb) connection
require('./config/database')

//importing route 
require('./config/route')(app);

//Execute app on particular port
app.listen(port, ()=>{
    console.log("server run on "+port+" port: run http://localhost:"+port);
});