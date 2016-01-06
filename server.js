var express = require("express");
var app = express();
var PORT = 3000;
var d
var middleware require("middleware");


app.use(middleware.logger);
app.get("/about", middleware.requireAuthentication, function(req, res){
res.send("Hello to us!");
});

app.use(express.static(__dirname + '/public'));
app.use(./middleware);
app.listen(PORT, function (){
	console.log("Express Server Started on port " + PORT)
});
