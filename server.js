var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var app = express();
var menu = require('./routes/menu');
var port = process.env.PORT || 8080;

// Other Routes
app.use('/menu', menu);
// Static file and template handling
app.use(express.static('static'));
app.set('view engine', 'pug');
// Form Handling
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.route('/')
	.get(function(req, res){
		res.render('new_index', {
			current_url: req.originalUrl,
		});
	})
	.post(function(req, res){
		console.log(req.body)
		res.redirect('/menu');
	});

var server = app.listen(port, function () {
  console.log('Example app listening on port %d!', port);
});