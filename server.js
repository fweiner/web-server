var express = require("express");
var app = express();
var PORT = 3000;
var d
var middleware = {
requireAuthentication: function(req, res, next){
	
	console.log("private route hit");
	next();
	},
	logger: function (req, res, next){
		d = new Date().toString();
		console.log("Request: " + req.method + " " + req.originalUrl + "Date: " + d);
		next();
	}
};
// app.use(middleware.requireAuthentication); //at the top application level

app.use(middleware.logger);
app.get("/about", middleware.requireAuthentication, function(req, res){
res.send("Hello to us");
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function (){
	console.log("Express Server Started on port " + PORT)
});
