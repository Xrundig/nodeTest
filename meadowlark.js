let express = require('express');
let fortune = require('./lib/fortune.js');
let app = express();
let handlebars = require('express-handlebars');
handlebars.create({defaultLayout: 'main'});
app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars());

let path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 3000);

app.use(function(req, res, next){
  res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
  next();
})
app.get('/', function(req, res){
  res.render('home');
});
app.get('/about', function(req, res){
  res.render('about', {
    fortune: fortune.getFortune(),
    pageTestScript: '/qa/tests-about.js'});
});
app.get('/tours/hood-river', function(req, res){
  res.render('tours/hood-river');
});
app.get('/tours/request-group-rate', function(req, res){
  res.render('tours/request-group-rate');
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
