import React from 'react';
import { connect } from 'react-redux'
import {Navigation} from './Navigation.jsx';


@connect(( state ) => {
    return {
        router:state.router,
        data:state.data
    }
})

export class Secure extends React.Component {


    render() {

        var state = JSON.stringify(this.props, null, 2);

        return (
            <div>
                <h1>Welcome to the secret!</h1>
                <hr/>

                <Navigation/>
            <pre>
                redux state = {state}
            </pre>
                <hr/>
                <h1>by the way it's {this.props.router.query.num}</h1>
            </div>
        );
    }
}

