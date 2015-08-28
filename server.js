var express = require('express'),
	app = express(),
	mongojs = require('mongojs'),
	db = mongojs('mongodb://admin:killer88@ds035703.mongolab.com:35703/pga-app'),
	golfers = db.collection('golfers'),
	bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


app.post('/golfer', function(req,res){
	golfers.insert(req.body, function(err, doc){
		res.json(doc);
	});
});

app.get('/golfers', function(req, res){
	golfers.find(function(err, docs){
		res.json(docs);
	});
});

var port = 3000;
app.listen(port);