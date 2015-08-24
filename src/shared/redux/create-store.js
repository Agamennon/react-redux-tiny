
import { createStore, applyMiddleware, combineReducers, compose  } from 'redux'
import promiseMiddleware from './middleware/promise-middleware';
import appMiddleware from './middleware/appmiddleware'



import {middleware as reduxTinyRouterMiddleware ,reducer as reduxTinyRouterReducer} from 'redux-tiny-router';
//var reduxTinyRouterMiddleware = require('./router/index.js').middleware;
//var reduxTinyRouterReducer = require('./router/index.js').reducer;
//console.log(reduxTinyRouterReducer.router);


//console.log(reduxTinyRouterMiddleware);
//console.log(routerMiddleware2);
//console.log(router);
//console.log(router2);

//import thunk from 'redux-thunk'
import * as reducers from './reducers'
import * as api from '../utils/api'




//console.log(reducers);


export default function (data,url) {

   // var api = require('../utils/api')(url);

 //     reducers.router = reduxTinyRouterReducer.router;
 //     var reducer = combineReducers(reducers);
 //   console.log(url);
 //   console.log(data);
    var reducer = combineReducers(Object.assign({},reduxTinyRouterReducer,reducers));
   // console.log(reducers);
    //var reducer = combineReducers(Object.assign(reduxTinyRouterReducer));
    var finalCreateStore;
   // var noDebug = false;

    //__CLIENT__ ? persistState(url.match(/[?&]debug_session=([^&]+)\b/)):null,

    if ( (__DEVELOPMENT__) && (__DEBUG__) && (__CLIENT__)) {

        const { devTools, persistState } = require('redux-devtools');

        finalCreateStore = compose(
            applyMiddleware(promiseMiddleware,appMiddleware,reduxTinyRouterMiddleware),
            devTools(),
            persistState(url.match(/[?&]debug_session=([^&]+)\b/)),
            createStore
        );

    } else {
        finalCreateStore = applyMiddleware(promiseMiddleware,appMiddleware,reduxTinyRouterMiddleware)(createStore);
    }
 //   console.log('creating store');
    return finalCreateStore(reducer, data);

}



/* if (__CLIENT__){

 sa.post('/api/data').send({index:1,text:'guilherme'}).end(function(saErr,saRes){
 if (saErr){
 console.log(saErr);
 console.log('from error');
 }
 else{

 console.log('from client data from client bitches ' + saRes.user);
 }

 });
 } else {
 // .set('cookie', req.get('cookie'))
 var some =  sa.post('http://localhost:3000/api/data');
 if (req.get('cookie'))
 some.set('cookie',req.get('cookie'));
 some.send({index:1,text:'guilherme'});
 some.end(function(saErr,saRes){
 if (saErr){
 //    console.log(saErr);
 console.log('from error');
 }
 else{
 console.log('from server data ' + saRes.user);

 }

 });
 // if ( req.get('cookie'))
 //   some.set('cookie', req.get('cookie'))
 }*/