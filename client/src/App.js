import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Switch, Route} from 'react-router-dom';
import authService from './services/authService';
import {login, getProfile} from './services/apiService';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUpForm from './Components/SignUpForm';
import CareGuide from './Components/CareGuide';
import Profile from './Components/Profile';
import Closet from './Components/Closet';
import ProtectedRoute from './Components/ProtectedRoute';

class App extends Component {
  state = {
    isSignedIn: false,
    user: {}
  }

  async componentDidMount() {
    try {
      const fetchedUser = await getProfile();

      this.setState({
        isSignedIn: authService.isAuthenticated(),
        user: fetchedUser
      })
    } catch (err) {
      console.log("Issue fetching token")
    }
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

  signOutUser = () => {
    authService.signOut()
    this.setState({
      isSignedIn: false,
      user: {}
    })
  }

  render() {
    const {isSignedIn, user} = this.state;
    return (
      <div className="App">
        <Navbar bg="light" variant="light">
          <img style={{marginRight: '10px'}} src="washing-machine.png" alt="laundry-logo"/>
          <Navbar.Brand href="/">Laundry Cycle</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              {!isSignedIn && <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>}
              {!isSignedIn && <Nav.Item><Nav.Link href="/signup">Sign Up</Nav.Link></Nav.Item>}
              {!isSignedIn && <Nav.Item><Nav.Link href="/careguide">Care Guide</Nav.Link></Nav.Item>}
              {isSignedIn && 
                <NavDropdown alignRight title="Menu" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/closet">Closet</NavDropdown.Item>
                  <NavDropdown.Item href="/careguide">Care Guide</NavDropdown.Item>
                  <NavDropdown.Divider/>
                  <NavDropdown.Item onClick={this.signOutUser}>Sign Out</NavDropdown.Item>
                </NavDropdown>
              }
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
          <ProtectedRoute
            exact path="/profile"
            user={user}
            component={Profile}
          />
          <ProtectedRoute
            exact path="/closet"
            user={user}
            component={Closet}
          />
        </Switch>
      </div>
    )
  }
}

export default App;