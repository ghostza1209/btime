//process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
//var config = require('./api/config/env/'+ process.env.NODE_ENV)

// console.log(config.mongoUri)
// var uri = process.env.MONGOLAB_URI || 'mongodb://localhost/gohub_system'
 var uri ='mongodb://<dbuser>:<dbpassword>@ds247838.mlab.com:47838/btime'
mongoose.connect(uri,function(error){
    if(error){ return console.log('connect mongo failed')}
    console.log('connected database successfully.')
})

var app = express()
app.use(serveStatic(path.join(__dirname, '/dist')))

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

require('./api/route/stock')(app)

var port = process.env.PORT || 5000
app.listen(port)
console.log('server started ' + port)