import * as a from '../actions/someactions'
import {tinyActions, utils} from 'redux-tiny-router'


export default function appMiddleware({ dispatch, getState}) {
    return (next) => {
        return (action) => {

            if (action.type === 'ROUTER_NAVIGATION'){
                const {url,path} = action.router;
                const isSecurePlace = utils.check('/secure/*',url);
                const loggedIn = getState().data.user;
                if (path === '/login') //if user wants to login thats ok and we dont want to loop!;
                    return next(action);
                if (isSecurePlace && !loggedIn){
                    dispatch(tinyActions.preventedNavigationAttempted(url)); //router will now store the attempted url for your convenience
                    dispatch(tinyActions.navigateTo('/login'));  //navigate to /login
                    return;  // this will stop further ROUTER_NAVIGATION processing, the action it will never reach the router middleware or the reducer
                }
                return next(action);
            }

            return (next(action));
        }
    }
}


