import React, {Component} from 'react';
import withHoc from './withHoc';

class UseHocTwo extends Component {
    render() {
        const {count, incrementCount} = this.props;
        return (
            <div>
                <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
            </div>
        );
    }
}

export default withHoc(UseHocTwo, 10);