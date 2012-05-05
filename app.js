var express = require('express');
var app = express.createServer();
var swig = require('swig');

app.register('.html', swig);
swig.init({
	root: __dirname + '/views',
	allowErrors: false
});

app.configure(function() {
	app.set('views', __dirname + '/views');
	app.set('view engine', 'html');
	app.set('view options', {layout: false});
	app.use(express.static(__dirname + '/node_modules/mocha'));
	app.use(express.static(__dirname + '/test'));
	app.use(express.static(__dirname + '/public'));
});
 
app.get('/', function(req, res){
    res.render('index', {});
});
 
app.listen(3000);