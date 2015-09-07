import React from 'react';
import Layout  from '../shared/components/Layout.jsx';
import createStore from '../shared/redux/create-store.js';
import {reduxTinyRouter} from 'redux-tiny-router'

const store = createStore(window.__DATA__,window.location.href);

if (__DEVELOPMENT__ && __UNIVERSAL__)
  console.log('%c***ATENTION*** React will complain below about markup re-use but that will only happen in development, this is due to the redux-dev-tool being added on the client but not on the server, in production all will be fine! ', 'background: white; color:darkblue');


reduxTinyRouter.init(store);


document.addEventListener('DOMContentLoaded', () => {
  React.render(<Layout store={store}/>,
      document.getElementById('app')
  );
});





