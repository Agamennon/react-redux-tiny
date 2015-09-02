import React from 'react';
import { connect } from 'react-redux'
import {Home} from './Home.jsx';
import {routerActions} from 'redux-tiny-router';
import {Other} from './Other.jsx';
import {Login} from './Login.jsx';
import {NotFound} from './NotFound.jsx';


/*
import {routerActions} from 'redux-tiny-router'
import * as otherActions from '../redux/actions/someactions.js';
var a = Object.assign({},routerActions,otherActions);
*/



if (__CLIENT__) {
    require('./layout.scss');
}

@connect((state ) => {
    return {
        state:state
    }
})
export class App extends React.Component {
    render() {



        var router = this.props.state.router;
        switch (router.paths[0]) { //first path
            case '/':
                return <Home/>;
            case 'login':
                return <Login/>;
            case 'other':
                return <Other/>;
            default:
                return <NotFound/>;
        }
    }
}
