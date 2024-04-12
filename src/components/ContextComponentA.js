import React, {Component} from 'react';
import ContextComponentB from "./ContextComponentB";

class ContextComponentA extends Component {
    render() {
        return (
            <ContextComponentB />
        );
    }
}

export default ContextComponentA;