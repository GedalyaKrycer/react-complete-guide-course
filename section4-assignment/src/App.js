import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';

class App extends Component {

  state = {
    userInput: [],
    charLength: 0,
    id: ""
  }


  charLengthHandler = (event) => {
    // Created an array of the characters that user inputs
    const charArray = event.target.value.toLowerCase().split('');

    // Updates state 
    this.setState({
      userInput: charArray,
      charLength: charArray.length
    })

  }


  deleteHandler = (charIndex) => {

    const userInputCopy = [...this.state.userInput];
    userInputCopy.splice(charIndex, 1);

    this.setState({
      userInput: userInputCopy,
      charLength: userInputCopy.length
    })

  }



  render() {

    return (
      <div className="App">

        <h1>Input a word that is 4 characters long</h1>
        <input type="text"
          onChange={event => this.charLengthHandler(event)} />
        <p>Your Character Length: {this.state.charLength}</p>

        <ValidationComponent txtLength={this.state.charLength} />


        {this.state.userInput.map((character, index) => {
          console.log(`Map ${character}`)
          return <CharComponent
            key={index}
            charText={character}
            click={() => this.deleteHandler(index)}

          />
        })}

        <hr />
        <h2>Instructions</h2>
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
