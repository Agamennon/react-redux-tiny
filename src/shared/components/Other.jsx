import React from 'react';
import { connect } from 'react-redux'
import {Navigation} from './Navigation.jsx';
import {OtherChild} from './OtherChild.jsx';
import {Link} from 'redux-tiny-router';

@connect((state ) => {
    return {
        router:state.router
    }
})
export class Other extends React.Component {

    render() {

        var state = JSON.stringify(this.props, null, 2);
        var router = this.props.router;
        var Number = router.query.num ? (<span>number = {router.query.num}</span>): null;

        var Component = (<div>
            <h1>This is Other! {Number}</h1>
            <hr/>
            <Navigation/>
            <pre>
                router state = {state}
            </pre>
        </div>);


        switch (router.params.id) {
            case 'withchild':
                return (
                    <div>
                        {Component}
                        <OtherChild/>
                    </div>
                );
            default:
                return (<div> {Component} </div>);
        }
    }
}
