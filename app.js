
var normalizeHashTags = require('./index.js');

console.info(normalizeHashTags(['web', 'pravo', 'JavaScript', 'Pravo', 'script', 'programming']));
// "web, pravo, javascript, script, programming"

console.info(normalizeHashTags([]));
// ""

console.info(normalizeHashTags(['web', 'pravo', 'JavaScript', 'Pravo', 'script', 'JaVaScript', 'programming', 'JavaSCript']));
// "web, pravo, javascript, script, programming"
