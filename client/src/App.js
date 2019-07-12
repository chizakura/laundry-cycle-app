import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import logo from './Images/washing-machine.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import authService from './services/authService';
import {login, getProfile, signUp, getItems, getClothingItem, getWashOptions, getDryOptions} from './services/apiService';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUpForm from './Components/SignUpForm';
import CareGuide from './Components/CareGuide';
import Profile from './Components/Profile';
import Closet from './Components/Closet';
import ProtectedRoute from './Components/ProtectedRoute';
import ShowClothingItem from './Components/ShowClothingItem';
import NewClothesForm from './Components/NewClothesForm';

class App extends Component {
  state = {
    isSignedIn: false,
    user: {},
    washOptions: [],
    dryOptions: [],
    clothes: [],
    clothingItem: {},
    itemWashOptions: {}
  }

  async componentDidMount() {
    try {
      const fetchedUser = await getProfile();
      const fetchedWashOptions = await getWashOptions();
      const fetchedDryOptions = await getDryOptions();

      this.setState({
        isSignedIn: authService.isAuthenticated(),
        user: fetchedUser,
        washOptions: fetchedWashOptions,
        dryOptions: fetchedDryOptions
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

  signUpUser = async (credentials) => {
    try {
      const user = await signUp(credentials);
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
      user: {},
      clothes: []
    })
  }

  handleClothingItem = async (itemId) => {
    const fetchedItem = await getClothingItem(itemId);
    this.setState({
      clothingItem: fetchedItem
    })
  }

  handleClothes = async (userId) => {
    const fetchedClothes = await getItems(userId);
    this.setState({
      clothes: fetchedClothes
    })
  }

  render() {
    const {isSignedIn, user, washOptions, dryOptions, clothes, clothingItem} = this.state;
    return (
      <div className="App">
        <Navbar bg="light" variant="light">
          <img style={{marginRight: '10px'}} src={logo} alt="laundry-logo"/>
          <Navbar.Brand as={Link} to="/">Laundry Cycle</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              {!isSignedIn && <Nav.Item><Nav.Link as={Link} to="/login">Login</Nav.Link></Nav.Item>}
              {!isSignedIn && <Nav.Item><Nav.Link as={Link} to="/signup">Sign Up</Nav.Link></Nav.Item>}
              {isSignedIn && 
                <NavDropdown alignRight title="Menu" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/closet">My Closet</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/newclothesform">Add Clothes</NavDropdown.Item>
                  <NavDropdown.Divider/>
                  <NavDropdown.Item onClick={this.signOutUser}>Sign Out</NavDropdown.Item>
                </NavDropdown>
              }
              <Nav.Item><Nav.Link as={Link} to="/careguide">Care Guide</Nav.Link></Nav.Item>
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
          <Route exact path="/signup" render={(props) => (
            <SignUpForm
              {...props}
              isSignedIn={isSignedIn}
              handleSignUp={this.signUpUser}
            />
          )}/>
          <Route exact path="/careguide" component={CareGuide}/>
          <ProtectedRoute
            exact path="/profile"
            user={user}
            count={clothes.length}
            component={Profile}
          />
          <ProtectedRoute
            exact path="/closet"
            clothes={clothes}
            handleClothes={this.handleClothes}
            component={Closet}
          />
          <ProtectedRoute
            exact path="/closet/:itemId"
            clothingItem={clothingItem}
            handleClothingItem={this.handleClothingItem}
            component={ShowClothingItem}
          />
          <ProtectedRoute
            exact path="/newclothesform"
            user={user}
            washOptions={washOptions}
            dryOptions={dryOptions}
            component={NewClothesForm}
          />
        </Switch>
      </div>
    )
  }
}

export default App;