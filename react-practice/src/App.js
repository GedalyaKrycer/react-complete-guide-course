import React, { Component } from 'react';
import classes from './app.module.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'


class App extends Component {

  state = {
    persons: [
      { name: 'Sal', age: 21, id: 1213 },
      { name: 'Jen', age: 32, id: 213 },
      { name: 'Peter', age: 28, id: 123 }
    ],
    otherState: true,
    showPersons: false
  }


  // Function to delete items from the state object's array. 
  // Takes in the index of the item being clicked, which is provided by the map method 
  deletePersonHandler = (personIndex) => {
    // Spreading the state creates an Immutable object that is a copy of the original
    const persons = [...this.state.persons];

    // This starts at the index that was passed in and removes one item from the array, returning a new array. 
    persons.splice(personIndex, 1);

    // State sets the original object with the new array 
    this.setState({ persons: persons });
  }



  // Processes the values provided by the input field for each item in the state
  // Takes in an event (value of input field) and the id of element being changed
  nameChangeHandle = (event, id) => {

    // This variable looks at the state and compares each item with the id that is being passed through. It returns that ID if the state id matches the passed in ID
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    // Spread operator that makes a copy into a new object. 
    // This is to not mutate the original object, which is only a reference element 
    const personCopy = {
      ...this.state.persons[personIndex]
    };

    // Updates the new object copy with the user's input value 
    personCopy.name = event.target.value;


    // Creates a new copy of the Persons array from the state
    const personsCopy = [...this.state.persons];

    // Looks inside of the copped array and finds the one that matches the specified index
    // Assignes it the person object that was just given an input value
    personsCopy[personIndex] = personCopy;


    // Updates the state with the new array 
    this.setState({ persons: personsCopy })
  }


  // Function to turn on and off the content
  togglePersonsHandler = () => {

    // Assigns the state for showing people to a new variable 
    const doesShow = this.state.showPersons;

    // Updates the state if true 
    this.setState({ showPersons: !doesShow })
  }

  render() {

    let persons = null;

    let btnClass = [classes.button];

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangeHandle(event, person.id)} />
            </ErrorBoundary>
          })}
        </div>
      );

      btnClass.push(classes.red);
    }

    // CSS Classes Array that will hold class names
    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }



    return (

      <div className={classes.app}>
        <h1>Hi, I am a React app.</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button
          className={btnClass.join(' ')}
          onClick={this.togglePersonsHandler}
        >
          Toggle Content
        </button>

        {persons}
      </div>
    );
  }

}

export default App;
