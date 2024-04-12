import React from 'react';
import ListRenderingComponent from "./ListRenderingComponent";
// Lists and Keys
// A "key" is a special string attribute you need to include when creating lists of elements.
// Keys give the elements a stable identity.
// Keys help React identify which items have changed, are added, or are removed.
// Help in efficient update of the user interface.


// Index as key
// When to use index as a key?
// 1. The items in your list do not have a unique id.
// 2. The list is a static list and will not change.
// 3. The list will never be reordered or filtered.
function ListRendering(props) {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            hero: 'Batman'
        },
        {
            id: 2,
            name: 'Clark',
            hero: 'Superman'
        },
        {
            id: 3,
            name: 'Diana',
            hero: 'Wonder woman'
        }
    ];
    const personList = persons.map(person => (
        <ListRenderingComponent key={person.id} person={person} />
    ));
    return (<div>{personList}</div>);
}

export default ListRendering;