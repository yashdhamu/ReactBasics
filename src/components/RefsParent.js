import React, {Component} from 'react';
import RefsChild from "./RefsChild";

class RefsParent extends Component {

    constructor(props) {
        super(props);
        this.ParentRef = React.createRef();
    }



    render() {
        return (
            <div>
                <RefsChild ref={this.ParentRef}/>
                <button onClick={this.clickHandler}>Parent button</button>
            </div>
        );
    }

    clickHandler = () => {
        this.ParentRef.current.focusHandler();
    }
}

export default RefsParent;