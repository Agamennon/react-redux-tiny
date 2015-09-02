
//import *  as api from '../../utils/api';
import {routerActions} from 'redux-tiny-router'
import {universalSuperagent} from '../../utils/universal-superagent.js';
var usa = new universalSuperagent();

export function setUser (user){
    return {
        type:'SET_USER',
        user
    }
}



export function login(username,password){
    return (dispatch,getState)=>{
       // dispatch(api.login(dispatch,getState,username,password))
        dispatch({
            type:'USER_LOGIN',
            payload: usa.post('/api/login',{data:{username,password}}).then((data)=>{
                dispatch(setUser(data.name));  //user logged set the user
                if (getState().router.attemptedOnPrevent) //did the user was prevented from navigating
                    dispatch(routerActions.rtrDoPreventedNavigation()); //now that he is authenticated, let him go to the url he wanted to., he could be prevented from it again
                else {
                    dispatch(routerActions.rtrNavigateTo('/'));
                }
                return data;

            },(err)=>{
                console.log(err);
                return err
            })
        })
    };
}

export function getData(){
    return (dispatch)=>{
        dispatch({
            type:'GET_DATA',
            payload:  usa.post('/api/data')
        })
    };
}

