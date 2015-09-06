import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux'
import {utils} from 'redux-tiny-router'
import {Home} from './Home.jsx';
import {Other} from './Other.jsx';
import {PreventExample} from './PreventExample.jsx';
import {Secure} from './Secure.jsx';
import {Login} from './Login.jsx';
import {NotFound} from './NotFound.jsx';



utils.setRoutes([
    '/',
    '/login',
    '/other',
    '/other/:id/*',
    '/secure/*',
    '/prevent'
]);


if (__CLIENT__) {
    require('./layout.scss');
}

@connect((state ) => {
    return {
        router:state.router
    }
})
export default class App extends Component {

    render() {

        const src = this.props.router.src;

        switch (src) {
            case '/':
                return <Home/>;
            case '/login':
                return <Login/>;
            case '/other':
                return <Other/>;
            case '/other/:id/*':
                return <Other />;
            case '/secure/*':
                return <Secure />;
            case '/prevent':
                return <PreventExample/>;
            default:
                return <NotFound/>;
        }


    }
}

