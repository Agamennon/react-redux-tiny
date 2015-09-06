

function isPromise(val) {
    return val && typeof val.then === 'function';
}

export default function promiseMiddleware({ dispatch, getState }) {
    return next => action => {

        return isPromise(action.payload)
            ? action.payload.then(
            (result) => {
                dispatch({ ...action, payload: result });

            },
            (error) => {
                console.log(error);
                dispatch({ ...action, payload: error, error: true });
            }
        )
            : next(action);
    };
}