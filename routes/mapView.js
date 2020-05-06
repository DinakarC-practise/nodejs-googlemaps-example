var express = require('express'),
    router = express.Router();

router.get('/',function(req,res){
  res.render('mapView', { title: 'Geo Locations of Driver', subtitle: 'Node.js / Google Maps Example with the help of the Express, Path, and Jade modules for neo4j Car data representation' });
});

module.exports = router;
