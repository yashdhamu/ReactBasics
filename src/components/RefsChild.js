import React, {Component} from 'react';

class RefsChild extends Component {

    constructor(props) {
        super(props);
        this.ChildRef = React.createRef();
    }

    focusHandler() {
        this.ChildRef.current.focus();
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.ChildRef}/>
            </div>
        );
    }
}

export default RefsChild;