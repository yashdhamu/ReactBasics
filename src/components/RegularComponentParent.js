import React, {Component} from 'react';
import PureComponentChild from "./PureComponentChild";
import RegularComponentChild from "./RegularComponentChild";
import FunctionalMemo from "./FunctionalMemo";

class RegularComponentParent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "React"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "React"
            })
        }, 2000)
    }

    render() {
        console.log("Parent Component Render")
        return (
            <div>
                Parent Component
                <FunctionalMemo name={this.state.name}/>
                {/*<RegularComponentChild name={this.state.name}/>*/}
                {/*<PureComponentChild name={this.state.name}/>*/}
            </div>
        );
    }
}

export default RegularComponentParent;