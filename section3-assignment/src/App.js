import React, { Component } from 'react'
import UserOutput from './components/UserOutput';
import UserInput from './components/UserInput';

class App extends Component {
  state = {
    userName: "User Name"

  }

  handleUserChange = (event) => {
    this.setState({
      userName: event.target.value
    })
  }



  render() {

    const bgStyle = {
      background: "#efefef",
      height: "100vh",
      padding: "50px 20px",
    }

    const containerStyle = {
       maxWidth: 400,
       
       margin: "0 auto"
    }

    return (
      <div style={bgStyle}>
        <div style={containerStyle}>

          <UserInput handleChange={this.handleUserChange} />
          <UserOutput userName={this.state.userName}
            bio={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae reiciendis optio expedita aliquid modi repudiandae voluptate quibusdam. Soluta libero aliquam deserunt dolores aperiam cum id minus incidunt? Reiciendis, distinctio doloribus!'}
          />
        </div>

      </div>
    );
  }
}

export default App;


