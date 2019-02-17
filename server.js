var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var config = require('./config/database');

//koneksi database
mongoose.connect(config.database,{ useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	// we're connected!
	console.log('Connected to MongoDB')
});
// Initial app
var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

// Setup server
var port = 3000;
app.listen(port, function() {
	console.log("Server running on port " + port);
});

//Membuat halaman index
app.get('/', function(req, res) {
	res.render("index", {
		title: 'Home'
	})
});



