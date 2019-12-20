let express = require('express');
let fortune = require('./lib/fortune.js');
let app = express();
let handlebars = require('express-handlebars');
handlebars.create({defaultLayout: 'main'});
app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars());


app.set('port', process.env.PORT || 3000);


app.get('/', function(req, res){
  res.render('home');
});
app.get('/about', function(req, res){
  res.render('about', {fortune: fortune.getFortune()});
});


app.use(function(req, res){
  res.status(404);
  res.render('404');
});
app.use(function(err, req, res, next){
  console.log(err.stack);
  res.status(500);
  res.render('500');
});
app.listen(app.get('port'), function(){
  console.log('Express is working');
})
