import React from 'react';
import { connect } from 'react-redux'
import {Home} from './Home.jsx';
import {utils} from 'redux-tiny-router';
import {Other} from './Other.jsx';
import {Special} from './Special.jsx';
import {Secure} from './Secure.jsx';
import {Login} from './Login.jsx';
import {NotFound} from './NotFound.jsx';


utils.setRoutes([
    '/',
    '/login',
    '/other',
    '/other/:id/*',
    '/special:id',
    '/secure/*'
]);


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

        const src = this.props.state.router.src;
        console.log(src);
        switch (src) { //first path
            case '/':
                return <Home/>;
            case '/login':
                return <Login/>;
            case '/other':
                return <Other/>;
            case '/other/:id/*':
                return <Other/>;
            case '/secure/*':
                return <Secure/>;
            default:
                return <NotFound/>;
        }


    }
}
