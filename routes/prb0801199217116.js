var express = require('express');
var router = express.Router();
var uuidGen = require('uuid/v4');

//REST
//post  -- ingresar
//get -- consultar
//delete -- borrar
//put -- modificar

/**
  *  Ruta About, devuelve todo descripcion y versión del api
  *  en formato json.
  */
router.get('/contactos',
  function( req, res, next ){
    console.log("Contactos");
    res.json(
      {"version":"1.0", "name":"Prueba API"}
    );
  }
 );


 let contactos = [];

 let logItem = {
   "_id":"",
   "nombres":"",
   "apellidos":" ",
   "correo":"",
   "telefono":""
 };

contactos.push(
  Object.assign( {}, logItem, {
    "_id":"1",
    "nombres":"",
    "apellidos":" ",
    "correo":"",
    "telefono":""
  })
);

contactos.push(Object.assign({}, logItem, {
  "_id":"2",
  "nombres":"Gustavo",
  "apellidos":"Andino ",
  "correo":"ces1411@hotmail.com",
  "telefono":"99534156"
}));

router.get('/contactos', function( req, res, next ){
  res.json(contactos);
}); // get /logs

router.get('/contactos/:_id', function( req, res, next ){
  var _id = req.params._id;
  var selected = logs.filter(function(currentItem, index){
    return currentItem._id === _id;
  });

  res.json(selected);
} );


router.post('/contactos/new', function( req, res, next) {
  var contactosParams = req.body;
  var newItem = Object.assign({},
    logItem, {
      "_id": uuidGen(),
      "nombres": "Jose",
      "apellidos": "Reyes",
      "correo": "c@.com",
      "telefono" : contactosParams.telefono
    }
    );
  contactos.push(newItem);
  res.json(newItem);
}); // post /logs/new

router.put('/contactos/update/:_id', function(req, res, next){
  var _id = req.params._id;
  var itemToSend = {};
  logs = contactos.map(function( currentItem, index){
    if( currentItem._id === _id ){
      currentItem = Object.assign({}, currentItem, req.body);
      itemToSend = currentItem;
    }
    return currentItem;
  });
  res.json(itemToSend);
}
); // update _id put

router.delete('/contactos/delete/:telefono', function(req, res, next){
  var _id = req.params.telefono;
  logs = contactos.filter(function( currentItem, index){
    return currentItem._nombres !== telefono;
  });
  res.json({"newArrayLength": contactos.length });
}
); // delete _id delete

module.exports = router;
