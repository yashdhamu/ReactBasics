import React, {Component} from 'react';

class ClassDestructured extends Component {
    render() {
        const {name, hero} = this.props;
        return (
            <div>
                <h1>{name} is {hero}</h1>
            </div>
        );
    }
}

export default ClassDestructured;