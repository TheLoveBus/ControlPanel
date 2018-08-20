var patterns = [];
var running_pattern = "";

var add = function( script ) {
 console.log( patterns.indexOf( script ) );
 if( patterns.indexOf(script) < 0 ) {
  patterns.push( script );
  return true;
 } else {
  console.log( "Skipping", script );
  return false;
 }
}

module.exports.add = add;

var remove = function( script ) {
 if( patterns.indexOf(script) >= 0 ) {
  patterns.splice( script );
  return true;
 } else {
  console.log( "Skipping", script );
  return false;
 }
}

module.exports.remove = remove;

var get_running = function() {
 return running_pattern;
}

module.exports.get_running = get_running;

var set_running = function( script ) {
 running_pattern = script;
}

module.exports.set_running = set_running;

var list = function( script ) {
 return patterns;
}

module.exports.list = list;

var update = function( scripts ) {
 patterns = scripts;
}

module.exports.update = update;
