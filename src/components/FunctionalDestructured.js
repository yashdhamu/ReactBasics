import React from 'react';

const FunctionalDestructured = ({name, hero}) => {
    return (
        <div>
            <h1>Hello, {name} a.k.a {hero}</h1>
        </div>
    );
}

const FunctionalDestructuredSecondWay = props => {
    const {name, hero} = props;
    return (
        <div>
            <h1>Hello, {name} a.k.a {hero}</h1>
        </div>
    );
}

export default FunctionalDestructuredSecondWay;