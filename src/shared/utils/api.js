//var  sa =  require ('superagent');
import {universalSuperagent} from './universal-superagent';
import {routerActions} from 'redux-tiny-router'
import * as otherActions from '../redux/actions/someactions.js';

var usa = new universalSuperagent();
var a = Object.assign({},routerActions,otherActions);



export function login(username,password){

    return usa.post('/api/login', {data:{username,password}});
}


/*

export function login(dispatch,getState,username,password){
    return {
        type:'USER_LOGIN',
        payload: usa.post('/api/login',{data:{username,password}}).then((data)=>{

               dispatch(a.setUser(data.name));  //user logged set the user
               if (getState().router.attemptedOnPrevent) //did the user was prevented from navigating
                  dispatch(a.rtrDoPreventedNavigation()); //now that he is authenticated, let him go to the url he wanted to., he could be prevented from it again
               else {
                   console.log('navigation to /');
                   dispatch(a.rtrNavigateTo('/'));
               }
            console.log('one1');
            return data;

        },(err)=>{
            console.log(err);
            return err
        })


    }
}
*/



export function getData(){
        return {
            type:'GET_DATA',
            payload:  usa.post('/api/data')
        };
}

