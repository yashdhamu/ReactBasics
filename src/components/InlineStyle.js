import React from 'react';

const heading = {
    fontSize: '72px',
    color: 'blue'
}
function InlineStyle(props) {
    return (
        <div>
            <h1 style={heading}>Inline Styling</h1>
        </div>
    );
}

export default InlineStyle;