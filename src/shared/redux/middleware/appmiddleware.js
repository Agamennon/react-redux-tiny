import * as a from '../actions/someactions'
import {routerActions, utils} from 'redux-tiny-router'


export default function appMiddleware({ dispatch, getState}) {
    return (next) => {
        return (action) => {


          if (action.type === 'ROUTER_NAVIGATION'){

              var router = action.router;

              if (getState().data.user || router.path === '/login'){ //did the user logged in?

                  if (router.path === '/redirect'){
                      router = utils.urlToRouter('/other');
                  }
                  //more of your stuff here
                  return next(action);
              } else { //user needs to be authenticated so redirect him
                  //tell the router what url the user was trying to reach so we can send him there later
                  dispatch(routerActions.preventedNavigationAttempted(router.url));
                  //redirect to login
                  dispatch(routerActions.navigateTo('/login'));
                  return;

              }



          }


            return (next(action));
        }
    }
}


