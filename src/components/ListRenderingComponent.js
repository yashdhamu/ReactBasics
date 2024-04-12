import React from 'react';

function ListRenderingComponent(props) {
    const person = props.person;
    return (
        <div>
            <h2>
                I am {person.name} and I am {person.hero}
            </h2>
        </div>
    );
}

export default ListRenderingComponent;