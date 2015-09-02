import React from 'react';
import { connect } from 'react-redux'
import {routerActions, Link} from 'redux-tiny-router'
import { bindActionCreators } from 'redux';
import * as otherActions from '../redux/actions/someactions.js';
import * as api from '../utils/api';
import  HttpHash from 'http-hash';

var hash = HttpHash();
console.log(hash);



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



    someAction (url){
      //  hash.set('/other/*',routerActions.rtrNavigateTo);
        console.log(url);
        var route = hash.get('/other/cucamonga?gui=10&sapiens=20');
        console.log(route);
        if (route.src){
          // route.handler(a.rtrNavigateTo('/other'));
         // this.props.dispatch(route.handler('/other'));
        }
    }


    navigateToHome (){
        this.props.dispatch(a.rtrNavigateTo('/'));
    }

    navigateToOther (){
        this.props.dispatch(a.rtrNavigateTo('/other'));
    }

    navigateToOtherSearch (){
        this.props.dispatch(a.rtrNavigateTo('/other', {num:10}));
    }


    allowNavigation (){
        this.props.dispatch(a.rtrAllowNavigation());
    }

    preventNavigation (){
        this.props.dispatch(a.rtrPreventNavigation()); //call this with a string argument to prevent navigation outside your app
    }

    doPreventedNavigation (){
        this.props.dispatch(a.rtrDoPreventedNavigation());
    }

    gui(){
        console.log('hello fuckers');
    }
    gui2(){
        console.log('hello fuckers2');
    }
    gui3(disp){
        console.log('hello fuckers3');
        disp(a.rtrNavigateTo('/other'));

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
        hash.set('/*',routerActions.rtrNavigateTo);
        hash.set('/other/*',this.gui2);
        hash.set('/other/mango',this.props.dispatch);
        hash.set('/other',this.gui);

    }


    render() {

        var state = JSON.stringify(this.props, null, 2);
        var router = this.props.router;
        var allow = (router.preventNavigation) ? 'navigation not allowd!':null;
        var prevented = (router.attemptedOnPrevent) ? <div>User try to go to {this.props.router.attemptedOnPrevent} <br/>
        you could show a popup warning of unfinished work <br/>
        and call the action rtrDoPreventedNavigation after user choise to redirect
        </div>: null;
           //    ('User try to go to: '+ this.props.router.attemptedOnPrevent + ' you could show a popup warning of unfinished work and call rtrDoPrevented to redirect') : null;

        return (
            <div>
                <h1>Welcome Home</h1>
                <hr/>
                <h3>{allow} {prevented}</h3>
                <hr/>
                <button  onClick={this.someAction.bind(this,router.url)}>Test</button>
                <button  onClick={this.navigateToHome.bind(this)}>To Home</button>
                <button  onClick={this.navigateToOther.bind(this)}>To Other </button>
                <button  onClick={this.navigateToOtherSearch.bind(this)}>To Other with Search</button>
                <button  onClick={this.allowNavigation.bind(this)}> Allow navigation </button>
                <button  onClick={this.preventNavigation.bind(this)}> Prevent navigation </button>
                <button  onClick={this.doPreventedNavigation.bind(this)}> Do Prevented </button>
                <Link path="/other/withchild" search={{num:'Ten!'}}>React Link</Link>
                <hr/>

            <pre>
                redux state = {state}


            </pre>
                <hr/>
            </div>
        );
    }
}

