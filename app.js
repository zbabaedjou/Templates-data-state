const express = require('express');
const bodyP = require('body-parser');
const cookieP = require('cookie-parser');

const app = express();
app
    .use(bodyP.urlencoded({ extended: false }))
    .use(cookieP());
const consolidate = require('consolidate');
app.engine('html', consolidate.nunjucks);
app.set('view engine', 'nunjucks');
app.use('/s', express.static('public'));
// Your handlers go here

let color_red=['cherry', 'strawberry', 'blood'];
let color_yellow=['sun', 'lemon', 'banana'];

/*app.get('/hello', function(req, res) {
   //res.sendFile(__dirname+'/public/hello.html');
  
  
  res.render(__dirname+'/views/hello.html', { 'name' : req.query.q });
});*/

/*app.get('/hello', function(req, res) {
  let color_red=['cherry', 'strawberry', 'blood'];
  let color_yellow=['sun', 'lemon', 'banana'];
    if (req.query.color=="red")
        res.render(__dirname+'/views/hello.html', { 'name':req.query.q,'colors' : color_red,'colors_id':req.query.color});
   if (req.query.color=="yellow")
        res.render(__dirname+'/views/hello.html', { 'name':req.query.q,'colors' : color_yellow,'colors_id':req.query.color});
});*/
app.post('/hello', function(req, res) {
  let color_red=['cherry', 'strawberry', 'blood'];
  let color_yellow=['sun', 'lemon', 'banana'];
    if (req.body.color=="red")
        res.render(__dirname+'/views/hello.html', { 'name':req.body.q,'colors' : color_red,'colors_id':req.body.color});
   if (req.body.color=="yellow")
        res.render(__dirname+'/views/hello.html', { 'name':req.body.q,'colors' : color_yellow,'colors_id':req.body.color});
});

/*app.get('/hello', function(req, res) {
   //res.sendFile(__dirname+'/public/hello.html'); 
  
  res.render(__dirname+'/views/hello.html', { 'name' : req.query.q });
});*/

/*app.get('/bye', function(req, res) {
    res.render(__dirname+'/views/bye.html', { 'name' : req.query.name });
  
  //res.render(__dirname+'/views/bye.html', { 'name' : req.query.q });
});*/
app.post('/bye', function(req, res) {
    res.render(__dirname+'/views/bye.html', { 'name' : req.body.name });
  
  //res.render(__dirname+'/views/bye.html', { 'name' : req.query.q });
});

app.get('/signin', function(req, res) {
   res.sendFile(__dirname+'/public/form.html');

});

app.get('/:name/counter/', function(req, res) {
    res.render(__dirname+'/views/first.html', { 'name' : req.params.name });  
  //res.render(__dirname+'/views/bye.html', { 'name' : req.query.q });
});
app.get('/:name/counter/:cnt([0-9]*)', function(req, res) {
    res.render(__dirname+'/views/first.html', { 'name' : req.params.name,'counter':req.params.cnt});  
});
app.get('/number', function(req, res) {
    res.render(__dirname+'/views/number.html', { 'counter':req.query.cnt});  
});
app.listen(process.env.PORT);