'use strict';
require('../../../modules/es.map');
require('../../../modules/es.object.to-string');
require('../../../modules/esnext.array.group-to-map');
var getBuiltInPrototypeMethod = require('../../../internals/get-built-in-prototype-method');

module.exports = getBuiltInPrototypeMethod('Array', 'groupToMap');
