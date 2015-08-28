import React from 'react';
import createStore from '../shared/redux/create-store.js';
import {reduxTinyRouter} from 'redux-tiny-router';
import Layout from '../shared/components/Layout.jsx';

export default (req, res, next) => {

  const production = !__DEVELOPMENT__;

  //console.log(reduxTinyRouter);

  //var {state,store} = reduxTinyRouter.initUniversal(req.headers.host+req.url,createStore);
reduxTinyRouter.initUniversal(req.headers.host+req.url,createStore,Layout).then((data)=>{


    //RENDER TO STRING NEED TO HAPPEN INSIDE INITUNIVERSAL
  //  let html = React.renderToString(<Layout store={data.store}/>);
   // console.log(data.html);

      res.render('index', {
     //     html: html,
          html: data.html,
          payload: JSON.stringify(data.state),
          production:production
      });
  });


 }
