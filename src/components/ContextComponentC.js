import React, {Component} from 'react';
import {UserConsumer} from "./Context";

class ContextComponentC extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (username) => {
                        return <div>Hello {username}</div>
                    }
                }
            </UserConsumer>
        );
    }
}

export default ContextComponentC;