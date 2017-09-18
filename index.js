'use strict';

const path = require('path');

require('babel-core/register')({
	ignore: false
});
require('bucket-core')({
  rootPath: path.join(__dirname, './'),
  appPath: path.join(__dirname, './app'),
  configPath: path.join(__dirname, './config'),
	callback: (app) => {
		require('./app/index')(app);
	}
});