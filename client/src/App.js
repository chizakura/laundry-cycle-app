import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Switch, Route} from 'react-router-dom';
import {login} from './services/apiService';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUpForm from './Components/SignUpForm';
import CareGuide from './Components/CareGuide';
import Profile from './Components/Profile';

class App extends Component {
  state = {
    isSignedIn: false,
    user: {}
  }

  loginUser = async (credentials) => {
    try {
      const user = await login(credentials);
      this.setState({
        isSignedIn: true,
        user
      })
    } catch (err) {
      throw err
    }
  }

  render() {
    const {isSignedIn} = this.state;
    return (
      <div className="App">
        <Navbar bg="light" variant="light">
          <div className="icon icon-wh-custom-washing-machine"></div>
          <Navbar.Brand href="/">Laundry Cycle</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-center">
              <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/signup">Sign Up</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/careguide">Care Guide</Nav.Link></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" render={(props) => (
            <Login
              {...props}
              isSignedIn={isSignedIn}
              handleLogin={this.loginUser}
            />
          )}/>
          <Route exact path="/signup" component={SignUpForm}/>
          <Route exact path="/careguide" component={CareGuide}/>
          <Route exact path="/profile" component={Profile}/>
        </Switch>
      </div>
    )
  }
}

export default App;