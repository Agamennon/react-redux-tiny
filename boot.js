//require('source-map-support').install();

 require('babel/register')({
 stage: 0,
 sourceMap:true,
 optional:['runtime']
 });

var paths = require ('./paths');

 global.__CLIENT__ = false;
 global.__SERVER__ = true;
 global.__DEBUG__ = true;
 global.__UNIVERSAL__ = paths.universal;
 global.__NODE_ENV__ = process.env.NODE_ENV;
 global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

 require('./src/server/server.js');


