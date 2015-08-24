import * as a from '../actions/someactions'

export default function appMiddleware({ dispatch, getState}) {
    return (next) => (action) => {
      //  console.log(action);
            if (action.type === 'ROUTER_NAVIGATION'){
              //  console.log('UUUUUUUUUUUUUUUUUUUUUUUUUUUUUU');
                dispatch(a.someAction());

            }
            return next(action)

    }
}


