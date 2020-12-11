import React, { Component } from 'react';
import './app.css'
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Courses from './containers/Courses/Courses';
// import Course from './containers/Course/Course'
import Users from './containers/Users/Users';

const checkList = {
  color: '#c4c4c4'
}

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div className="App">

          <nav>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/users">Users</NavLink>
          </nav>

          <Switch>
            <Route path="/" exact />
            <Route path="/courses" component={Courses} />
            <Route path="/users" component={Users} />
            <Redirect from="/all-courses" to="/courses" />
            <Route render={() => <h1>404 — Page Not Found</h1>} />

            {/* ALT VERSION */}
            {/* <Route
              path={'/:id'}
              exact
              component={Course}
            /> */}
          </Switch>

          <ol style={{ textAlign: 'left' }}>
            <li style={checkList}>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
            <li style={checkList}>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
            <li style={checkList}>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
            <li style={checkList}>Pass the course ID to the "Course" page and output it there</li>
            <li style={checkList}>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
            <li style={checkList}>Load the "Course" component as a nested component of "Courses"</li>
            <li style={checkList}>Add a 404 error page and render it for any unknown routes</li>
            <li style={checkList}>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
          </ol>
        </div>
      </BrowserRouter>





    );
  }
}

export default App;
