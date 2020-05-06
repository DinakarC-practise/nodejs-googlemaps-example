var express = require('express'),
    path = require('path'),
    jade = require('jade'),
    pizza = require('./routes/pizza');
    mapView = require('./routes/mapView')

var app = new express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/mapView', mapView);
app.use('/pizza', pizza);


app.get('/',function(req,res){
  res.render('layout', { title: 'Node.js / Google Maps', subtitle: 'Showing geo locations' });
});

app.listen(3000)
