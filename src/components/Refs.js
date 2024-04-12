import React, {Component} from 'react';
// Please note: refs do not work in functional components. They only work in class components.
class Refs extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    clickHandeler = () => {
        alert(this.inputRef.current.value)
    }

    componentDidMount() {
        this.inputRef.current.focus();
        console.log(this.inputRef);
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <button onClick={this.clickHandeler}>Focus Input</button>
            </div>
        );
    }
}

export default Refs;