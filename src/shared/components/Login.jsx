import React from 'react';
import { connect } from 'react-redux'
import {tinyActions, Link} from 'redux-tiny-router'
import * as otherActions from '../redux/actions/someactions.js';

var actions = Object.assign({},tinyActions,otherActions);

@connect((state ) => {
    return {
        router:state.router
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

    login (){
        const username = this.state.username;
        const password = this.state.password;
        this.props.dispatch(actions.login(username,password));
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
