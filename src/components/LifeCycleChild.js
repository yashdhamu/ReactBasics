import React, {Component} from 'react';

class LifeCycleChild extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'React'
        };
        console.log('LifeCycleChild constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleChild getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('LifeCycleChild componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('LifeCycleChild shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleChild getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('LifeCycleChild componentDidUpdate');
    }

    render() {
        console.log('LifeCycleChild render');
        return (
            <div>
                LifeCycleChild
            </div>
        );
    }
}

export default LifeCycleChild;