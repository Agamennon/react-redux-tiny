

import {tinyActions,utils} from 'redux-tiny-router'
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
        dispatch({
            type:'USER_LOGIN',
            payload: usa.post('/api/login',{data:{username,password}}).then((data)=>{
                dispatch(setUser(data.name));  //user logged im  set the user
                if (getState().router.attemptedOnPrevent){ //did the user was prevented from navigating
                    dispatch(tinyActions.doPreventedNavigation()); //now that he is authenticated, let him go to the url he wanted to., he could be prevented from it again
                }
                else  {
                    dispatch(tinyActions.navigateTo('/'));
                }

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

