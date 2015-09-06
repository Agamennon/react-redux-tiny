import React from 'react';
import {connect} from 'react-redux'
import {tinyActions, Link, utils} from 'redux-tiny-router'
import * as appActions from '../redux/actions/someactions.js';
import {Navigation} from './Navigation.jsx';


var actions = Object.assign({},tinyActions,appActions);

@connect(( state ) => {
    return {
        router:state.router
    }
})

export class PreventExample extends React.Component {


    allowNavigation (){
        this.props.dispatch(actions.allowNavigation());
    }
    preventNavigation (){
        //don't pass a string here if you don't want to hold the user on your page
        this.props.dispatch(actions.preventNavigation('If you dont want to prevent the user from leaving your page just dont pass a string to preventNavigation')); //call this with a string argument to prevent navigation outside your app
    }
    doPreventedNavigation (){
        this.props.dispatch(actions.doPreventedNavigation());
    }

    render() {
        var router = this.props.router;
        //if router.attemptedOnPrevent has a value the user tried to navigate away but was prevented
        const prevented = (router.attemptedOnPrevent) ? <div><span>User try to go to {this.props.router.attemptedOnPrevent} but was prevented<br/>
            you could show a popup warning of unfinished work <br/>
            and call the action doPreventedNavigation after user choice to redirect <br/>The button "Do Prevented" does just that </span>
        </div>: null;
        const status = router.preventNavigation ? '   Navigation is NOT Allowed!' : '   Navigation Allowed!';

        return (
            <div>
                <h1>Lest play prevent...</h1>
                <h3>click Prevent Navigation and try to navigate away! (you can try changing the url too)</h3>
                <hr/>
                <Navigation />
                <hr/>
                <button  onClick={this.preventNavigation.bind(this)}> Prevent navigation </button>
                <button  onClick={this.allowNavigation.bind(this)}> Allow navigation </button>
                <button  onClick={this.doPreventedNavigation.bind(this)}> Do Prevented </button>


                <hr/>
                <div>{status}</div>
                <pre> {prevented}</pre>
            </div>
        );
    }
}

