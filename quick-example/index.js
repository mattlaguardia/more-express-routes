// REQUIREMENTS //
var express = require('express');
  app = express();
var burgers = [
  "Hambuger",
  "Cheese Burger",
  "Dble Cheese Burger"
];
var tacos = [
  "Soft Taco",
  "Crunchy Taco",
  "Super Taco"
];
// A "GET" REQUEST TO "/" WILL RUN THE FUNCTION //
app.get('/', function(req, res){
  res.send("Hello World");
});
// SEND ALL THE BURGERS //
app.get('/burgers', function(req, res){
  res.send(burgers.join(', '));
});
// SEND ALL THE TACOS //
app.get('/tacos', function(req, res){
  res.send(tacos.join(', '));
})
// START THE SERVER //
app.listen(3000, function(){
  console.log("Go to localhost:3000/");
})
// ANOTHER EXAMPLE OF SOME SIMPLE MIDDLEWARE //
// CALL THIS FUNCTION ON EVERY ROUTE WITH THE PARAM OF 'NAME' //
app.param('name', function(request, response, next){
  // GET NAME FROM PARAMS //
  var name = request.params.name;
  // CAPITALIZE THE NAME //
  var capitalizedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  // SET THE VALUE OF THE NAME TO THE CAPITALIZED VERSION //
  request.params.name = capitalizedName;
  // PASS CONTROL TO THE NEXT MIDDLEWARE FUNCTION //
  next();
})
// A GET REQUEST TO GREET NAME //
app.get('/greet/:name', function(req, res){
  res.send('Hello, ' + req.params.name);
})
// LEST ADD OUR FIRST ROUTE TO PRACTICE QUERY PARAMS //
app.get('/thank', function(req, res){
  var name = req.query.name;
  res.send('Thank you, ' + name);
});
