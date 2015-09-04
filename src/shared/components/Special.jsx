import React from 'react';
import { connect } from 'react-redux'
import {routerActions, utils} from 'redux-tiny-router'
import { bindActionCreators } from 'redux';
import * as otherActions from '../redux/actions/someactions.js';
import * as api from '../utils/api';
import {OtherChild} from './OtherChild.jsx';

var a = Object.assign({},routerActions,otherActions);


@connect((state ) => {
    return {
        router:state.router,
        data:state.data
    }
})
export class Special extends React.Component {

    render() {
        var state = JSON.stringify(this.props, null, 2);
        var router = this.props.router;
        //var otherSubRoute = router.paths[1];

        var number = router.params.num;
        var Number = number ? (<span>number parameter = {number}</span>): null;

        var Component = (<div>
            <h1>This is Special Other! {Number}</h1>
            <hr/>
            <pre>redux state = {state}</pre>
        </div>);


        switch (router.params.id) {
            case 'withchild':
                return (
                    <div>
                        {Component}
                        <OtherChild/>
                    </div>
                );
            default:
                return <div> {Component} </div>;
        }
    }
}
