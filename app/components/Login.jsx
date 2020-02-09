import React from 'react';
import {connect} from 'react-redux';

export class Login extends React.Component {
    render() {
        return (
            <div>Login</div>
        )
    }
}

export default connect()(Login);
