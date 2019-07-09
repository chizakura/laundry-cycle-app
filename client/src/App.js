import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUpForm from './Components/SignUpForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="/">Laundry Cycle</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-center">
              <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/signup">Sign Up</Nav.Link></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={SignUpForm}/>
        </Switch>
      </div>
    )
  }
}

export default App;