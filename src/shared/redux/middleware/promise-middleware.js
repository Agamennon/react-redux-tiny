export default function promiseMiddleware() {
    return (next) => (action) => {

        const { promise, types, ...rest } = action;
        if (!promise) {

            return next(action)
        }

        const [REQUEST, SUCCESS, FAILURE] = types;

        next({...rest, type: REQUEST});


        return promise().then(function (result) { // (A)

            next({...rest, result, type: SUCCESS})
        }).catch(function (error) { // (B)
            next({...rest, error, type: FAILURE})
        });

    }
}
