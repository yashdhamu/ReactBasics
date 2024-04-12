import React from 'react';

function ErrorBoundaryFunctional(props) {
    if (props.hero === 'Joker') {
        throw new Error('Not a hero');
    }
    return (
        <div>
            <h1>{props.hero}</h1>
        </div>
    );
}

export default ErrorBoundaryFunctional;