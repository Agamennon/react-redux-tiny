import React from 'react';
import { connect } from 'react-redux'
import sa from 'superagent';
import {routerActions, Link} from 'redux-tiny-router'
import { bindActionCreators } from 'redux';
//var routerActions = require('../redux/router/index.js').routerActions;
import * as otherActions from '../redux/actions/someactions.js';
//import {universalSuperagent} from '../utils/universal-superagent';
import * as api from '../utils/api';

//console.log(usa);
//console.log(<Link>);

/*@connect((state ) => {
 return {
 data:state.data,
 router:state
 }
 })*/
//var usa = new universalSuperagent;
//console.log(usa);


var a = Object.assign({},routerActions,otherActions);

if (__CLIENT__) {
    require('./layout.scss');
}


/*
@connect((state ) => {
    return {
       state:state
    }
})
export class App extends React.Component {
    render(){
        return (
            <div>
                <spam>hello</spam>
        </div>
        )
    }
}
*/


@connect((state ) => {
    return {
        state:state
    }
})
export class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {username: ''};
    }

    handleUsername (e){
        this.setState({username: e.target.value});
    }

    handlePassword (e){
        this.setState({password: e.target.value});
    }


    login (){
        //sould be an action that starts login process
        console.log('change this to an ');
        api.login(this.state.username,this.state.password);
    }


    someAction (){
        this.props.dispatch(a.someAction());
    }


    apiCall (){

        api.getData().then(function(data){
          //  console.log(data);
        },function(erro){
          //  console.log(erro);
        });
      /*  usa.post('/api/data',{index:1,text:'guilherme'}).then(
            function(data){
                console.log('data = ');
                console.log(data)
            },
            function(erro){
                console.log('erro = ');
                console.log(erro)
            });*/
    }

    navigateTo (){
        this.props.dispatch(a.rtrNavigateTo('/hello', {gui:'eu',leo:'legal'}));
    }

    allowNavigation (){
        this.props.dispatch(a.rtrAllowNavigation());
    }

    preventNavigation (){
        this.props.dispatch(a.rtrPreventNavigation());
    }

    doPreventedNavigation (){
        this.props.dispatch(a.rtrDoPreventedNavigation());
    }


    navigateToOther (){
        this.props.dispatch(a.rtrNavigateTo('/other', {ot:'nn',bb:'ccc'}));
    }

    navigateToRoot (){
        this.props.dispatch(a.rtrNavigateTo('/', {root:'yes'}));
    }

    action(){
        this.props.dispatch({
            type:'CLIENT_ACTION',
            data:'this was set by the client'
        });
    }




    getData(){
        console.log('i was clicked dudddde');

        sa.post('/api/data').send({index:1,text:'guilherme'}).end(function(saErr,saRes){
            if (saErr){
              //  console.log(saErr);
                console.log('from error');
            }
            else{
             //   console.log(saRes);
                console.log('from data');
            }

        });
        /*  fetch('/api/data').then(function(response){
         if (response.status >= 400) {
         console.log(respose.status);
         throw new Error("Bad response from server");
         }
         console.log(response.json());
         return response.json();
         }).then(function(data){
         console.log(data)
         });*/
    }


    componentWillMount(){
        console.log('component WILL MOUNT');
        if (__SERVER__) {
          //  console.log("APP DISPATCH!!!");
            //this.props.dispatch(a.someActionFSA2());
         //   this.props.dispatch(a.thunktest());

        }
    }
    componentDidMount () {

     //   this.props.dispatch(a.rtrPreventNavigation());
     //   this.props.dispatch(a.someActionFSA());

        /*    fetch('/api/data').then(function(response){
         if (response.status >= 400) {
         console.log(respose.status);
         throw new Error("Bad response from server");
         }
         console.log(response.json());
         return response.json();
         }).then(function(data){
         console.log(data)
         });*/
    }


    render() {

        var state = JSON.stringify(this.props, null, 2);

        return (
            <div>
                <h1>Welcome to the test ana celi</h1>
                <hr/>
                <label>Username:</label>
                <input value={this.username} onChange={this.handleUsername.bind(this)} />
                <label>Password:</label>
                <input value={this.password} onChange={this.handlePassword.bind(this)}/>
                <button onClick={this.login.bind(this)}> Login </button>
                <hr/>

                <button  onClick={this.navigateTo.bind(this)}> navigateTo </button>
                <button  onClick={this.navigateToRoot.bind(this)}> navigateTo ROOT </button>
                <button  onClick={this.navigateToOther.bind(this)}> navigateTo Other </button>
                <button  onClick={this.apiCall.bind(this)}> api test </button>
                <button  onClick={this.allowNavigation.bind(this)}> allow navigation </button>
                <button  onClick={this.preventNavigation.bind(this)}> prevent navigation </button>
                <button  onClick={this.doPreventedNavigation.bind(this)}> do Prevent action</button>
                <Link><button>link test</button></Link>
                <a href="/ugabuga">click me dude</a>
            <pre>
                redux state = {state}
            </pre>
            </div>
        );
    }
}

/*

<button onClick={this.action.bind(this)}> client action</button>
<button onClick={this.someAction.bind(this)}> some action</button>
<button  onClick={this.getData.bind(this)}> get data </button>

*/


/*

export class App extends React.Component {


    /!*  handleUsername (e){
     this.setState({username: e.target.value});
     }*!/

    someAction (){
        this.props.dispatch(a.someAction());
    }


    apiCall (){

        api.getData().then(function(data){
            console.log(data);
        },function(erro){
            console.log(erro);
        });
        /!*  usa.post('/api/data',{index:1,text:'guilherme'}).then(
         function(data){
         console.log('data = ');
         console.log(data)
         },
         function(erro){
         console.log('erro = ');
         console.log(erro)
         });*!/
    }

    navigateTo (){
        this.props.dispatch(a.navigateTo('/hello', {gui:'eu',leo:'legal'}));
    }

    action(){
        this.props.dispatch({
            type:'CLIENT_ACTION',
            data:'this was set by the client'
        });
    }


    login (){
        api.login()
    }

    getData(){
        console.log('i was clicked dudddde');

        sa.post('/api/data').send({index:1,text:'guilherme'}).end(function(saErr,saRes){
            if (saErr){
                console.log(saErr);
                console.log('from error');
            }
            else{
                console.log(saRes);
                console.log('from data');
            }

        });
        /!*  fetch('/api/data').then(function(response){
         if (response.status >= 400) {
         console.log(respose.status);
         throw new Error("Bad response from server");
         }
         console.log(response.json());
         return response.json();
         }).then(function(data){
         console.log(data)
         });*!/
    }

    componentDidMount () {


        /!*    fetch('/api/data').then(function(response){
         if (response.status >= 400) {
         console.log(respose.status);
         throw new Error("Bad response from server");
         }
         console.log(response.json());
         return response.json();
         }).then(function(data){
         console.log(data)
         });*!/
    }


    render() {

        var state = JSON.stringify(this.props, null, 2);

        return (
            <div>
                <h1>Welcome to the test</h1>
                <hr/>
                <label>Username:</label>
                <input value={username} onChange={this.handleUsername.bind(this)} />
                <label>Password:</label>
                <input/>
                <button onClick={this.login.bind(this)}> Login </button>
                <hr/>
                <button onClick={this.action.bind(this)}> client action</button>
                <button onClick={this.someAction.bind(this)}> some action</button>
                <button  onClick={this.getData.bind(this)}> get data </button>
                <button  onClick={this.logout.bind(this)}> logout </button>
                <button  onClick={this.navigateTo.bind(this)}> navigateTo </button>
                <button  onClick={this.apiCall.bind(this)}> api test </button>
                <Link><button>link test</button></Link>
            <pre>
                redux state = {state}
            </pre>
            </div>
        );
    }
}*/
