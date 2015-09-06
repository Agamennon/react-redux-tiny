import React from 'react';
import { connect } from 'react-redux'
import {Navigation} from './Navigation.jsx';
import * as actions from '../redux/actions/someactions';
import {tinyActions, Link} from 'redux-tiny-router';

@connect(( state ) => {
    return {
       router:state.router,
       data:state.data
    }
})

export class Home extends React.Component {


  /*  componentWillMount(){
        if (__UNIVERSAL__ && !__CLIENT__) {
               this.props.dispatch(actions.getData());
        }
        if (!__UNIVERSAL__) {
            this.props.dispatch(actions.getData());
        }
    }*/


    render() {

        var state = JSON.stringify(this.props, null, 2);

        return (
            <div>
                <h1>Welcome Home</h1>

                <hr/>
                <Navigation/>
                <hr/>
            <pre>
                redux state = {state}
            </pre>
                <hr/>
            </div>
        );
    }
}

