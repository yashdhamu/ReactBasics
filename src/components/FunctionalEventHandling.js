import React from 'react';

function FunctionalEventHandling(props) {
    function clickHandler() {
        console.log('Button clicked');
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    );
}

export default FunctionalEventHandling;