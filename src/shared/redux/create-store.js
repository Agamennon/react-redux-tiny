
import { createStore, applyMiddleware, combineReducers, compose  } from 'redux'
import promiseMiddleware from './middleware/promise-middleware';
import promiseMiddlewareLight from './middleware/redux-promise-light';
import thunk from 'redux-thunk';
import appMiddleware from './middleware/appmiddleware'
import {middleware as reduxTinyRouterMiddleware,universal, reducer as reduxTinyRouterReducer} from 'redux-tiny-router';

import * as reducers from './reducers'


export default function (data,url) {
    var reducer = combineReducers(Object.assign({},reduxTinyRouterReducer,reducers));


    var finalCreateStore;

    if ( (__DEVELOPMENT__) && (__DEBUG__) && (__CLIENT__)) {
        const { devTools, persistState } = require('redux-devtools');
        finalCreateStore = compose(
            applyMiddleware(thunk,promiseMiddlewareLight,appMiddleware,reduxTinyRouterMiddleware),  //appMiddleware removed
            devTools(),
            persistState(url.match(/[?&]debug_session=([^&]+)\b/)),
            createStore
        );

    } else {
        finalCreateStore = applyMiddleware(universal,thunk,promiseMiddlewareLight,appMiddleware,reduxTinyRouterMiddleware)(createStore);

    }
    return finalCreateStore(reducer, data);
}
