import React from 'react';
import ReactDOM from 'react-dom';

function Portals(props) {
    return ReactDOM.createPortal(
        <h1>Portal component</h1>,
        document.getElementById('root-portals')
    );
}

export default Portals;