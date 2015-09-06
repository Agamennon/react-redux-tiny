import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import multer from 'multer';
import compression from 'compression';
import render from './render.js'
import httpProxy from 'http-proxy';
import session from 'express-session';
import backend from './backend';

module.exports = function(app,mode,root,port) {
    app.use(session({
        secret: 'react and redux rule!!!!',
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 6000000 }
    }));
    app.use(bodyParser.json()); // for parsing application/json
    app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
    app.use(multer()); // for parsing multipart/form-data


    app.use(compression());

    app.set('views', 'src/server/views/');
    app.set('view engine', 'ejs');

    app.use(express.static(path.resolve(__dirname,'..','..','public')));

    backend(app);
    app.use(render);


};