import React from 'react';
import {Link} from 'redux-tiny-router'

export class Navigation extends React.Component {

    render() {

        return (
            <div>
                <Link path="/">Home</Link>
                <Link path="/prevent">Prevent</Link>
                <Link path="/other">Other</Link>
                <Link path="/other/withchild" search={{num:10}}>Other with search and params</Link>
                <Link path="/secure" search={{num:42}}>Secret</Link>
            </div>
        );
    }
}
