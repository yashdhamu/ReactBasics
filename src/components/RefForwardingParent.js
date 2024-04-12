import React, {Component} from 'react';
import RefForwardingChild from "./RefForwardingChild";

class RefForwardingParent extends Component {

    constructor(props) {
        super(props);
        this.ParentRef = React.createRef();
    }

    clickHandler = () => {
        this.ParentRef.current.focus();
    }

    render() {
        return (
            <div>
                <RefForwardingChild ref={this.ParentRef}/>
                <button onClick={this.clickHandler}>Focus input</button>
            </div>
        );
    }
}

export default RefForwardingParent;