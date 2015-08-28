import * as a from '../actions/someactions'

export default function appMiddleware({ dispatch, getState}) {
    return (next) => {
        return (action) => {

/*

            if (action.type === 'RTR_ROUTER_NAVIGATION'){

                return next(action);
                //   dispatch(a.someActionFSA());

            }
*/

            if (action.type === 'someActionFSA'){
                //   console.log('get sucess appmddleware');
                if (action.payload.data > 20){
                    //   dispatch(a.someActionFSA());
                }
            }


            return (next(action));
        }
    }
}


