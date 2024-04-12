import React, {Component} from 'react';
import withHoc from './withHoc';

class UseHocOne extends Component {
    render() {
        const {count, incrementCount} = this.props;
        return (
            <div>
                <button onClick={incrementCount}> {this.props.name} Clicked {count} times</button>
            </div>
        );
    }
}

export default withHoc(UseHocOne, 5);