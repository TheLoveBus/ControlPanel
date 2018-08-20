var express = require('express');
var router = express.Router();
var debug = require('debug')('lovebus-controlpanel:route:index');

router.get('/', function(req, res, next) {
 // Check if script is set in query string, if so, update scriptStore
 debug( req.query );
 if( req.query && req.query.script ) {
  scriptStore.set_running( req.query.script );
 }

 var running_script = scriptStore.get_running();
 var script_list = scriptStore.list();
 var options = {
  title: 'LoveBus Control Panel',
  running_script: running_script,
  scripts: script_list
 };
 res.render('index', options);
});

module.exports = router;
