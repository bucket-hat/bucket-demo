'use strict';

const branch = process.env['branch'];

switch(branch){
    case 'develop': module.exports = require('./config.dev');break;
    case 'product': module.exports = require('./config.prod');break;
    default: module.exports = require('./config.dev');break;
}
