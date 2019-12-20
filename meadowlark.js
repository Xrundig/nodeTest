let express = require('express');
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
  let randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render('about', {fortune: randomFortune});
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

let fortunes = [
  "You will get a surprise",
  "Something exciting is waiting for you",
  "Hi",
]
