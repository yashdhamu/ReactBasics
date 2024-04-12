import React from 'react';

function FunctionalMemo(props) {
    console.log("Functional Memo Component Render")
    return (
        <div>
            {props.name}
        </div>
    );
}

export default React.memo(FunctionalMemo);