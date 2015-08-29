
import *  as api from '../../utils/api';

export function login(username,password){
    return {
        types: ['ASYNC_REQUEST', 'GET_SUCCESS', 'GET_FAILURE'],
        promise:() => {
            return api.getData()
        }
    };
}

export function someAction(){
    return {
        types: ['GET_REQUEST', 'GET_SUCCESS', 'GET_FAILURE'],
        promise:() => {
           return api.getData()
        }
    };
}


export function someActionFSA(){
    return {
        type:'someActionFSA',
        payload: api.getData()
    };
}


function someActionFSA2DO (){
    return {
        type:'someActionFSA2',
        payload: api.getData2()
    };
}

export function someActionFSA2(){
   return (dispatch)=>{
       dispatch(someActionFSA2DO())
    };
}

export function thunktest (val){
   return ()=>{
       return api.getData().then(
           (data)=>{
               api.getData2().then(
                   (data)=>{

                       return {
                           type:'SOME_OTHER_ACTION',
                           val:'some shit'
                       }
                   },
                   (err)=>{

                   });
           }
           ,
           (err)=>{

           });
   }
}


export function someOtherAction(){


        return {
            type:'SOME_OTHER_ACTION'

        };



}
