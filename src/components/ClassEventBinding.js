import React, {Component} from 'react';

class ClassEventBinding extends Component {
    constructor(props) {
        super(props)
        this.state = {
             message: 'Hello'
        }

        this.changeText = this.changeText.bind(this);
    }

    changeText() {
        this.setState({
            message: 'Goodbye!'
        });
    }

    // changeText = () => {
    //     this.setState({
    //         message: 'Goodbye!'
    //     });
    // }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*<button onClick={this.changeText.bind(this)}>Click to change</button>*/}
                {/*<button onClick={() => this.changeText()}>Click to change</button>*/}
                <button onClick={this.changeText}>Click to change</button>
            </div>
        );
    }
}

export default ClassEventBinding;