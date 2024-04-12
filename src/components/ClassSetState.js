import React, {Component} from 'react';
// https://youtu.be/uirRaVjRsf4?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3
// setState
// Always make use of setState and never modify the state directly.
// Code has to be executed after the state has been updated ? Place that code in the call back function which is the second argument to the setState method.
// When you have to update state based on the previous state value, pass in a function as an argument instead of the regular object.

class ClassSetState extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log('Callback value', this.state.count)
        // });
        this.setState((prevState) => ({
          count: prevState.count + 1
        }), () => {
            console.log('Callback value', this.state.count)
        });

    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Count: {this.state.count}</h1>
                </div>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.incrementFive()}>Increment by 5</button>
            </div>
        );
    }
}

export default ClassSetState;