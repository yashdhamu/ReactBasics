import React from 'react';

// function RefForwardingChild(props) {
//     return (
//         <div></div>
//     );
// }

const RefForwardingChild = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    );
});

export default RefForwardingChild;