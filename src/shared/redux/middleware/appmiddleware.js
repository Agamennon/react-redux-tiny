import * as a from '../actions/someactions'
import {routerActions, utils} from 'redux-tiny-router'


export default function appMiddleware({ dispatch, getState}) {
    return (next) => {
        return (action) => {


          if (action.type === 'RTR_ROUTER_NAVIGATION'){

              var router = action.router;

              if (getState().data.user || router.path === '/login'){

                  if (router.path === '/redirect'){
                   //   router = utils.urlToRouter('/redirect');
                  }
                  return next(action);
              } else {
                  //tell the router what url the user was trying to reach

                  dispatch(routerActions.rtrPreventedNavigationAttempted(router.url));
                  dispatch(routerActions.rtrNavigateTo('/login'));

                  return;
                  //redirect to login

              }



          }


            return (next(action));
        }
    }
}


