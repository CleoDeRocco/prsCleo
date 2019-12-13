var express = require('express');
var fs = require('fs');
var favicon = require('serve-favicon');


var app = express();
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(favicon(__dirname + '/public/images/logo.png'));

var port = process.env.PORT || 3000;
app.listen(port);

var a = ['/', '/logout', '/login'];
app.get(a, function(request, response){
  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  //response.render('index');
  response.render('login'); //added from one below commented out
});

/*
app.get('/login', function(request, response){
  var user_data={
      name: request.query.player_name
  };
  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  response.render('game', {user:user_data});
}); */

/*app.get('/:user/results', function(request, response){
  var user_data={
      name: request.params.user,
      weapon: request.query.weapon
  };
  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  response.send(JSON.stringify(user_data));
}); */

app.get('/stats', function(request, response){
  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  response.render('stats');
});
app.get('/about', function(request, response){
  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  response.render('about');
});

app.get('/game', function(request, response){
  var user_data={
      name: request.query.username, //request.params.user,
      password: request.query.password,
      //weapon: request.query.weapon
  };
  console.log(user_data);
  if(logged_in) {
  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  response.render('game', {
    user: user_data //fix
  });
}
else {
  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  response.render('error');
}
});

app.post('/:user/game', function(request, response){
  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  response.render('results');
});
