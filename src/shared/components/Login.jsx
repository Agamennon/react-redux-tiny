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
export class Login extends React.Component {


    constructor(props) {
        super(props);
        this.state = {username: 'redux',password:'tinyrouter'};
    }

    handleUsername (e){
        this.setState({username: e.target.value});
    }

    handlePassword (e){
        this.setState({password: e.target.value});
    }

 /*   componentWillMount(){
        console.log('component WILL MOUNT LOGIN');
        if (__UNIVERSAL__ && !__CLIENT__) {
            console.log('dispatching...');
            this.props.dispatch(a.getData());
        }

        if (!__UNIVERSAL__) {
            console.log('dispatching...');
            this.props.dispatch(a.getData());
            //   this.props.dispatch(a.someActionFSA2());
        }


    }*/

    login (){
        const username = this.state.username;
        const password = this.state.password;
        this.props.dispatch(a.login(username,password));
       // api.login(this.state.username,this.state.password);
    }


    render() {

        return (<div>
            <h1>Please log in! </h1>
            <hr/>
            <label>Username:</label>
            <input value={this.state.username} onChange={this.handleUsername.bind(this)} />
            <label>Password:</label>
            <input value={this.state.password} onChange={this.handlePassword.bind(this)}/>
            <button onClick={this.login.bind(this)}> Login </button>
            <hr/>

        </div>)
    }
}
