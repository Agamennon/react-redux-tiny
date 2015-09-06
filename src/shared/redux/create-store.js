
import { createStore, combineReducers, applyMiddleware, compose  } from 'redux'
import promiseMiddlewareLight from './middleware/redux-promise-light';
import thunk from 'redux-thunk';
import appMiddleware from './middleware/appmiddleware'
import {tinyMiddleware ,tinyUniversal, tinyReducer} from 'redux-tiny-router';
import * as reducers from './reducers'


let middleware = [thunk,promiseMiddlewareLight,appMiddleware,tinyMiddleware];

//this example uses instalation OPTION2
export default function (data,url) {

    var reducer = combineReducers(Object.assign({},tinyReducer,reducers));
    var finalCreateStore;
    if ( (__DEVELOPMENT__) && (__DEBUG__) && (__CLIENT__)) {
        const { devTools, persistState } = require('redux-devtools');
        finalCreateStore = compose(
            applyMiddleware(...middleware),
            devTools(),
            persistState(url.match(/[?&]debug_session=([^&]+)\b/))
        )(createStore);

    } else {
        middleware.unshift(tinyUniversal);
        finalCreateStore = applyMiddleware(...middleware)(createStore);
    }
    return finalCreateStore(reducer, data);

}
