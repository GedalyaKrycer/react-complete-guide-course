import React from 'react';
import Person from './Person/Person'



const Persons = ({ persons, clicked, changed }) => persons.map((person, index) => {
    return <Person
        key={person.id}
        click={() => clicked(index)}
        name={person.name}
        age={person.age}
        changed={(event) => changed(event, person.id)} />

});

export default Persons;
