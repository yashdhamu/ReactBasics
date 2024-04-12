import React, {Component} from 'react';
import MethodAsPropChild from "./MethodAsPropChild";

class MethodAsPropParent extends Component {

    constructor(props) {
        super();
        this.state = {
            parentName: 'Parent'
        }
        this.SayHiToParent = this.SayHiToParent.bind(this);
    }

    SayHiToParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`);
    }

    render() {
        return (
            <div>
                <MethodAsPropChild greetHandler={this.SayHiToParent}/>
            </div>
        );
    }
}

export default MethodAsPropParent;