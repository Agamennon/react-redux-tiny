
import *  as api from '../../utils/api';
import * as sa from 'superagent';



/*    sa.post('http://localhost:3000/api/data').send({index:1,text:'guilherme'}).end(function(saErr,saRes){
        if (saErr){
            console.log(saErr);
            console.log('from error');
        }else {
            console.log(saRes);
        }
    });*/
   /* console.log (__SERVER__);
    api.getData().then(function(data){
        console.log('data');
        console.log(data)
    },function(erro){
        console.log('erro');
        console.log(erro)
    });*/


export function someAction(){
    //http://stackoverflow.com/questions/25659960/how-can-i-execute-code-before-hashchange
 //   console.log('********************* SOME ACTION *****************');
  /* console.log(api.getData().then(function(data){
        console.log('data');
        console.log(data)
    },function(erro){
       console.log('erro');
       console.log(erro)
   }));*/


 //   console.log(api.getData());

    return {
        types: ['GET_REQUEST', 'GET_SUCCESS', 'GET_FAILURE'],
        promise:() => {
           return api.getData()
        }

    };

    //this.props.dispatch(actions.navigateToFromLink(hash));

}

export function someAction2(info){
    //http://stackoverflow.com/questions/25659960/how-can-i-execute-code-before-hashchange
    console.log('********************* HASH CHANGE *****************');

    return {
        type:'SOME_ACTION',
        info
    };

    //this.props.dispatch(actions.navigateToFromLink(hash));

}
