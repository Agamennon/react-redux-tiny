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

export class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    navigateToHome (){
        this.props.dispatch(a.navigateTo('/'));
    }

    navigateToOther (){
        this.props.dispatch(a.navigateTo('/other/'));
    }

    navigateToSpecialOther (){
        this.props.dispatch(a.navigateTo('/other/withchild', {num:10}));
    }


    allowNavigation (){
        this.props.dispatch(a.allowNavigation());
    }

    preventNavigation (){
        this.props.dispatch(a.preventNavigation()); //call this with a string argument to prevent navigation outside your app
    }

    doPreventedNavigation (){
        this.props.dispatch(a.doPreventedNavigation());
    }


    componentWillMount(){

        if (__UNIVERSAL__ && !__CLIENT__) {

               this.props.dispatch(a.getData());
            //   this.props.dispatch(a.someActionFSA2());
        }

        if (!__UNIVERSAL__) {

            this.props.dispatch(a.getData());
            //   this.props.dispatch(a.someActionFSA2());
        }


    }


    componentDidMount () {

    }

    render() {

        var state = JSON.stringify(this.props, null, 2);
        var router = this.props.router;
        var allow = (router.preventNavigation) ? 'navigation not allowd!':null;
        var prevented = (router.attemptedOnPrevent) ? <div>User try to go to {this.props.router.attemptedOnPrevent} <br/>
        you could show a popup warning of unfinished work <br/>
        and call the action doPreventedNavigation after user choise to redirect
        </div>: null;
           //    ('User try to go to: '+ this.props.router.attemptedOnPrevent + ' you could show a popup warning of unfinished work and call rtrDoPrevented to redirect') : null;

        return (
            <div>
                <h1>Welcome Home</h1>
                <hr/>
                <h3>{allow} {prevented}</h3>
                <hr/>
                <button  onClick={this.navigateToHome.bind(this)}>To Home</button>
                <button  onClick={this.navigateToOther.bind(this)}>To Other </button>
                <button  onClick={this.navigateToSpecialOther.bind(this)}>To Special Other with Search and params</button>
                <button  onClick={this.allowNavigation.bind(this)}> Allow navigation </button>
                <button  onClick={this.preventNavigation.bind(this)}> Prevent navigation </button>
                <button  onClick={this.doPreventedNavigation.bind(this)}> Do Prevented </button>
                <Link path="/secret" search={{num:42}}>React Link to Secret</Link>
                <hr/>

            <pre>
                redux state = {state}


            </pre>
                <hr/>
            </div>
        );
    }
}

