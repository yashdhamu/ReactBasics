import React, {Component} from 'react';

class RenderPropCommon extends Component {

    constructor(props) {
        super();
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }

    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.incrementCount)}
            </div>
        );
    }
}

export default RenderPropCommon;