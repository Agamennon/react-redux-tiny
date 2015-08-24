//var  sa =  require ('superagent');
import {universalSuperagent} from './universal-superagent';
var usa = new universalSuperagent();


export function getData(index){

    return usa.post('/api/data',{index:1,text:'guilherme'})

}


export function getOtherData(index){

    return usa.post('/api/data',{index:1,text:'guilherme'})

}