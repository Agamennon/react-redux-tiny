import React from 'react';
import Layout  from '../shared/components/Layout.jsx';
import createStore from '../shared/redux/create-store.js';
import { reduxTinyRouter } from 'redux-tiny-router'


const store = createStore(window.__DATA__,window.location.href);
if (__DEVELOPMENT__)
  console.log('%c***ATENTION*** React will complain below about markup re-use but that will only happen in development, this is due to the redux-dev-tool being added on the client but not on the server, in production all will be fine! ', 'background: white; color:darkblue');

document.addEventListener('DOMContentLoaded', () => {
  reduxTinyRouter.init(store);
  React.render(<Layout store={store}/>,
      document.getElementById('app')
  );
});



/*

 import {routerActions as actions } from 'redux-tiny-router';

 let store = createStore({},window.location.href);

 store.dispatch(actions.handleHashChange(window.location.pathname));
 var  unsubscribe = store.subscribe(function(){
 //   console.log('nerver heppened!');
 unsubscribe();
 var state =  store.getState();
 store = createStore(state,window.location.href);

 });

 if (__DEVELOPMENT__)
 console.log('%c***ATENTION*** React will complain below about markup re-use but that will only happen in development, this is due to the redux-dev-tool being added on the client but not on the server, in production all will be fine! ', 'background: white; color:darkblue');

 document.addEventListener('DOMContentLoaded', () => {
 //  reduxTinyRouter.init(store);
 React.render(<Layout store={store}/>,
 document.getElementById('app')
 );
 });
 */


