import React, {Component} from 'react';
import ContextComponentC from "./ContextComponentC";
import Context from "./Context";

class ContextComponentB extends Component {

    static contextType = Context;

    render() {
        return (
            <div>
                Component B context {this.context}
                <ContextComponentC/>
            </div>
        );
    }
}

export default ContextComponentB;