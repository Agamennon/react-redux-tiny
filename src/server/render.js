import React from 'react';
import createStore from '../shared/redux/create-store.js';
import {reduxTinyRouter} from 'redux-tiny-router';
import Layout from '../shared/components/Layout.jsx';

export default (req, res, next) => {

    const production = !__DEVELOPMENT__;

    if (__UNIVERSAL__){
        var url = req.headers.host+req.url;
        reduxTinyRouter.initUniversal(url,createStore,Layout).then((data)=>{
            res.render('index', {
                html: data.html,
                payload: JSON.stringify(data.state),
                production:production
            });
        });
    } else {
        res.render('index', {
            html: '',
            payload:JSON.stringify({}),
            production:production
        });
    }



}
