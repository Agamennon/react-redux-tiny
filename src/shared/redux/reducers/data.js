
export default function data(state = {}, action = {}) {

    switch (action.type) {


    /*    case 'RTR_ROUTER_NAVIGATION':
            return {
                ...state,
                rtr_directory: action.router.path
            };
*/

     /*   case 'ROUTER_NAVIGATION':
            if (action.pattern === '/hello?gui&leo'){
                console.log('hello gui leo');
                return {
                    pattern:action.pattern,
                    ...state
                };
            }
            if (!action.router){
                action.router = {path:'none'}
            }
            return {
                ...state,
                directory: action.router.path
            };*/

        case 'SOME_OTHER_ACTION':

            return {
                ...state,
                someOther: 'someOtherAction',
                val:action.val

            };

        case 'someActionFSA':

            console.log('SOME ACTION FSA!!!! ' + action.payload.data);
            return {
                ...state,
                fsaResult:action.payload

            };

        case 'someActionFSA2':

         //   console.log('SOME ACTION FSA2!!!! ' + action.payload.data);
            return {
                ...state,
                fsa2Result:action.payload

            };


        case 'CLIENT_ACTION':
            return {
                ...state,
                clientData: action.data
            };

        case 'GET_REQUEST':
            console.log('app reducer REQUEST PENDING  (GET_REQUEST)');
            return {
                ...state,
                pending:'truee'
            };

        case 'GET_SUCCESS':
            console.log('app reducer REQUEST OVER (GET_SUCCESS)');
            return {
                ...state,
                pending:'false',
                frog:'fuck',
                supercalafragilistic:'someAction hahahah'
            };


        default:
            return {...state}
    }
}
