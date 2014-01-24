/**
 * serve the static files up with express
 */
 var express = require('express'),
     http = require('http'),
     path = require('path'),
      app = express();

function clientErrorHandler(err, req, res, next) {
  if (req.xhr) res.send(500, { error: 'Something blew up!' }); 
  else ext(err);
}
app.set('port', 3000);
app.use(clientErrorHandler);
app.use(express.favicon());
app.use(express.bodyParser());
app.use(express.logger('dev'));
app.configure(function() {
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(app.router);
});

var currentToken;
app.post('/auth', function(req, res) {
  console.log(req.body);
  var body = req.body,
      username = body.username,
      password = body.password;

  if (username == 'admin' && password == 'demo') {
    // Generate and save the token (forgotten upon server restart).
    currentToken = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    res.send({
      success: true,
      token: currentToken
    });
  } else {
    res.send({
      success: false,
      message: 'Invalid username/password'
    });
  }
});



app.get('*', function (req, res) { res.sendfile(path.join(__dirname, 'app/index.html')); });

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
