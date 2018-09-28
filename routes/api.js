/*var express = require('express');
var router =express.Router();
var uuidGen = require('uuid/v4');

router.get('/autor',
function(req, res, next){
  console.log("Entro en Autor por metodo GET");
  res.json(
    {"Cuenta":"0801-1992-17116","name":"Gustavo Andres Andino Coello "}
  );
}
);

//Almacen temporal de memoria
let logs =[];

let logItems = {
  "-id":uuidGen(),
  "date":0,
  "user":0,
  "description":"",
  "status":0,
  "closed":false
};

logs.push(
  //abrir llaves y cerrar llaves es un objeto json valido
  Object.assign({}, logItems, {
    "-id":uuidGen(),
    "date": new Date().getTime(),
    "user":"system",
    "description":"Inicio Log 1",

   })
);
logs.push(
  //abrir llaves y cerrar llaves es un objeto json valido
  Object.assign({}, logItems, {
    "date": new Date().getTime(),
    "user":"system",
    "description":"Inicio Log 2",
    "status":3,
    "closed":true
   })
);

router.get('/logs', function (req, res, next){
  res.json(logs);
});

router.get('/logs/:_id', function (req, res, next){
var _id= req.params._id;
var selected= log.filter(function(currentItem, index){
  return currentItem._id === _id;
})
  res.json(selected);
});

/*
router.post('/logs/new',function( req, res, next){
  var logsParams= req.body;
  var newItem = Object.assign({},logItem,{
    "date":new Date().getTime(),
    "status":parseInt(logsParams.status) || 0,
    "description":logsParams.description
  })
)
}
  logs.push(newItem);
  res.json(newItem);
);


router.put('/logs/update/:-id', function(req, res, next){
  var _id = req.params._id;
  var itemToSend ={};
  logs=logs.map(function(currentItem, index ){
    if(currentItem._id === _id){
      currentItem= Object.assign({}, currentItem, req.body);
    }
    return currentItem;
  });
  res.json({itemToSend);
}
); //update _id put

router.delete('/logs/delete/:_id', function(req,res,next){
  var _id =req.params._id;
  logs = logs.filter(function(currentItem, index){

    return currentItem._id !== _id;
  });
  res.json({"newArrayLength": logs.length});
}
); //delete_id dekete
*/
/*module.exports= router;
---------------
var express = require('express');
var router = express.Router();
var uuidGen = require('uuid/v4');

var contactos = [];

var _contacto = {
  "_id":"",
  "nombres":"",
  "apellidos":" ",
  "correo":"",
  "telefono":""

};

router.get ('/contactos',function(req, res , next){
  response.json(contactos);
});

router.get ('/contactos/:index',function(req, res , next){
  var _index= parseInt(req.params.index);
  if(_index>=0 &&_index < contactos.lenght){
    res.json(contactos[_index]);
  } else{
    res.json({"Error":"No se encontro el registro"});
  }

router.post('/new', function(req, res ,next){
var _newContacto= Object.assign({}, _contacto, req.body);
contactos.push(-newContacto);
var _newIndex = contactos.lenght -1;
res.json({"_id":"1","index":_newIndex, "contacto": _newContacto});
});

router.put('/modify/:index', function(req, res, next){

});

router.delete('/delete/:index',function(req, res ,next){

});

module.exports= router;
*/
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
      {"_id":"0801199217116",
      "nombres":"Gustavo Andres",
      "apellidos":"Andino Coello ",
      "correo":"ces1411@hotmail.com",
      "telefono":"99534156"}
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
  "nombres":"",
  "apellidos":" ",
  "correo":"",
  "telefono":""
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
      "_id": uuidGen()
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

router.delete('/contactos/delete/:_id', function(req, res, next){
  var _id = req.params._id;
  logs = contactos.filter(function( currentItem, index){
    return currentItem._id !== _id;
  });
  res.json({"newArrayLength": logs.length });
}
); // delete _id delete

module.exports = router;
