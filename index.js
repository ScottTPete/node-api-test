var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var app = express();
var port = 8000; //process.env.PORT || 3000 is good practice for haruko


app.use(bodyParser.json());
app.use(cors());

var mongoUri = 'mongodb://admin:admin@ds015928.mlab.com:15928/sample-api';
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log('Connection to mongoDB successful')
})

//controller
var userCtrl = require('./server/features/users/server.user.controller');


app.get('/api/v1/users', userCtrl.getUsers);
app.post('/api/v1/users', userCtrl.addUser);

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
	console.log("listening on port: " + port);
})