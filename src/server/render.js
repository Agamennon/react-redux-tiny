import React from 'react';
import createStore from '../shared/redux/create-store.js';
import {reduxTinyRouter} from 'redux-tiny-router';
import Layout from '../shared/components/Layout.jsx';

export default (req, res, next) => {

  const production = !__DEVELOPMENT__;

  //var {state,store} = reduxTinyRouter.initUniversal(req.headers.host+req.url,createStore);
  reduxTinyRouter.initUniversal(req.headers.host+req.url,createStore).then((data)=>{
      let html = React.renderToString(<Layout store={data.store}/>);
      res.render('index', {
          html: html,
          payload: JSON.stringify(data.state),
          production:production
      });
  });


 }
