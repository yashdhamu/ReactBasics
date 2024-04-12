import React from 'react';

function MethodAsPropChild(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('Child')}>Greet Parent</button>
        </div>
    );
}

export default MethodAsPropChild;