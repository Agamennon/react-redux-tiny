import React from 'react';
import { connect } from 'react-redux'
import {routerActions, Link, utils} from 'redux-tiny-router'
import { bindActionCreators } from 'redux';
import * as otherActions from '../redux/actions/someactions.js';
import * as api from '../utils/api';


var a = Object.assign({},routerActions,otherActions);


@connect(( state ) => {
    return {
        router:state.router,
        data:state.data
    }
})

export class Secure extends React.Component {


    render() {

        var state = JSON.stringify(this.props, null, 2);
        var router = this.props.router;

        return (
            <div>
                <h1>Welcome to the secret!</h1>
                <hr/>

            <pre>
                redux state = {state}
            </pre>
                <hr/>
                <h1>by the way its 42!</h1>
            </div>
        );
    }
}

