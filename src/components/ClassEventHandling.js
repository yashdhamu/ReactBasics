import React, {Component} from 'react';

class ClassEventHandling extends Component {

    clickHandeler() {
        console.log('Button Clicked');
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandeler}>Click Me!</button>
            </div>
        );
    }
}

export default ClassEventHandling;