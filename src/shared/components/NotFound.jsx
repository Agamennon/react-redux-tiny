import React from 'react';
import { connect } from 'react-redux'
import {routerActions, Link} from 'redux-tiny-router'
import { bindActionCreators } from 'redux';
import * as otherActions from '../redux/actions/someactions.js';
import * as api from '../utils/api';




var a = Object.assign({},routerActions,otherActions);

@connect((state ) => {
    return {
        state:state
    }
})
export class NotFound extends React.Component {


    render() {
        var state = JSON.stringify(this.props, null, 2);
        return (<div>
            <h1>route not found below is the router state</h1>
            <pre>redux state = {state}</pre>

        </div>)
    }
}
