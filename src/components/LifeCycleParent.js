import React, {Component} from 'react';
import LifeCycleChild from "./LifeCycleChild";

class LifeCycleParent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'React'
        };
        console.log('LifeCycleParent constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleParent getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('LifeCycleParent componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('LifeCycleParent shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleParent getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('LifeCycleParent componentDidUpdate');
    }

    changeState = () => {
        this.setState({
            name: 'ReactJS'
        });
    };

    render() {
        console.log('LifeCycleParent render');
        return (
            <div>
                <div>
                    LifeCycleParent
                </div>
                <button onClick={this.changeState}>Change state</button>
                <LifeCycleChild/>
            </div>
        );
    }
}

export default LifeCycleParent;