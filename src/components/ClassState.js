import React, {Component} from "react";

class ClassState extends Component {

    constructor() {
        super();
        this.state = {
            message: "Current State: 1"
        }
    }

    changeState() {
        this.setState({
            message: "Current State: 2"
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeState()}>Subscribe</button>
            </div>
        );
    }
}

export default ClassState;