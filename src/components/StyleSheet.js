import React from 'react';
import './myStyle.css';
function StyleSheet(props) {
    let className = props.primary ? 'primary' : '';
    return (
        <div>
            <h1 className={className}>Stylesheet</h1>
        </div>
    );
}

export default StyleSheet;
