var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');
// VAR BODYPARSER.URLENCODED() RETURNS A FUNCTION THAT WILL BE CALLED LATER IN THE APP.POST() ROUTE //
var parseUrlencoded = bodyParser.urlencoded({extended: false});

// STORE FOR CITIES IN MEMORY (AS LONG AS SERVER IS RUNNING) //
var cities = [];

app.get('/cities', function(req, res){
  res.render(process.cwd() + '/cities', {cities: cities});
})

// PASSING MULTIPLE MIDDLEWARE FUNCTIONS TO THIS ROUTE; THEY ARE EXECUTED SEQUENTIALLY //
app.post('/cities', parseUrlencoded, function(request, response){
  var city;
  var name = request.body.name;
  var description = request.body.description;
  city = {name: name, description: description}
  cities.push(city);
  // PASSING LOCAL VARIABLES TO BE USED IN EJS TEMPLATE //
  response.render('cities', {cities: cities});
})
// NEED TO CALL THE PORT IN ORDER FOR THIS TO FUNCTION //
app.listen(3000, function(){
  console.log("Go to localhost:3000/");
})
