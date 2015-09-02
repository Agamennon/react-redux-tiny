
export default function data(state = {}, action = {}) {

    switch (action.type) {


        case 'SET_USER':

            return {
                ...state,
                user: action.user

            };

        case 'GET_DATA':
            return {
                ...state,
                someData: action.payload
            };


        default:
            return {...state}
    }
}
