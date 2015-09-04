
import { createStore,applyMiddleware, combineReducers, compose  } from 'redux'
import promiseMiddlewareLight from './middleware/redux-promise-light';
import thunk from 'redux-thunk';
import appMiddleware from './middleware/appmiddleware'
import {applyMiddleware as tinyApplyMiddleware} from 'redux-tiny-router'
import {middleware as reduxTinyRouterMiddleware,universal, reducer as reduxTinyRouterReducer} from 'redux-tiny-router';
import * as reducers from './reducers'


var __DEVELOPMENT__ = true;
var __DEBUG__ = true;
var __CLIENT__ = true;

export default function (data,url) {
    //DONT COMBINE REDUCERS ... JUST SEND YOUR OBJECT INTO FINAL CREATE STORE!
   var reducer = Object.assign({},reducers);
  //  var reducer = combineReducers(Object.assign({},reduxTinyRouterReducer,reducers));
    var finalCreateStore;
    if ( (__DEVELOPMENT__) && (__DEBUG__) && (__CLIENT__)) {
        const { devTools, persistState } = require('redux-devtools');
            finalCreateStore = compose(
    //        applyMiddleware(thunk,promiseMiddlewareLight,appMiddleware,reduxTinyRouterMiddleware),
            tinyApplyMiddleware(thunk,promiseMiddlewareLight,appMiddleware),
            devTools(),
            persistState(url.match(/[?&]debug_session=([^&]+)\b/)),
            createStore
        );

    } else {
       finalCreateStore = tinyApplyMiddleware(thunk,promiseMiddlewareLight,appMiddleware)(createStore);
 // finalCreateStore = applyMiddleware(universal,thunk,promiseMiddlewareLight,appMiddleware,reduxTinyRouterMiddleware)(createStore);
    }
    return finalCreateStore(reducer, data);
}
