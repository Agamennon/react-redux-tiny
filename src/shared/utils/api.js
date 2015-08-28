//var  sa =  require ('superagent');
import {universalSuperagent} from './universal-superagent';

var usa = new universalSuperagent();


export function login(username,password){

    return usa.post('/api/login', {data:{username,password}});
}


export function getData(index){
    return usa.post('/api/data',{index:1,text:'guilherme'})
}


export function getData2(index){
    return usa.post('/api/data2')
}




export function getOtherData(index){

    return usa.post('/api/data',{index:1,text:'guilherme'})

}