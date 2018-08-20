var express = require('express');
var router = express.Router();

router.use( function(req, res, next) {
 if( typeof req.body != 'object' )
  req.body = JSON.parse( req.body );
 next();
});

router.get('/', function(req, res, next) {
 let running_script = scriptStore.get_running();
 res.json( { script_name: running_script } );
});

router.get('/running', function(req, res, next) {
 let running_script = scriptStore.get_running();
 res.json( { script_name: running_script } );
});

router.get('/list', function(req, res, next) {
 res.json( scriptStore.list() );
 res.end();
});

router.post('/add', function(req, res, next) {
 if( req.body.script ) {
  if( ! scriptStore.add(req.body.script) ) {
   console.log( "Skipped", req.body.script );
   res.status(208);
   res.end();
  }
 }
 res.end();
});

router.post('/delete', function(req, res, next) {
 if( req.body.script ) {
  if( ! scriptStore.remove(req.body.script) ) {
   res.status(401);
   res.end();
  }
 }
 res.end();
});

router.post('/select', function(req, res, next) {
 if( req.body.script_name )
  scriptStore.select_running(req.body.script_name);
 res.end();
});

router.post('/off', function(req, res, next) {
 scriptStore.set_running("");
});

router.post('/update', function(req, res, next) {
 if( req.body.length > 0 )
  scriptStore.update(req.body);
 res.send({result:"OK"})
 res.end();
});

module.exports = router;
