

function isPromise(val) {
    return val && typeof val.then === 'function';
}

export default function promiseMiddleware({ dispatch, getState }) {
    return next => action => {
        if (action.type === 'someActionFSA2'){
            console.log('dispatching from promise middleware === someActionFSA2' );
        }
     //   action.payload = isPromise (action.payload) ? action.payload : action.payload();

        return isPromise(action.payload)
            ? action.payload.then(
                result => {


                    dispatch({ ...action, payload: result });

                },
                error => {

                    dispatch({ ...action, payload: error, error: true });

                }
        )
            : next(action);
    };
}