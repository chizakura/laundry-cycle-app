import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import axios from 'axios';
import logo from './Images/washing-machine.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import authService from './services/authService';
import {login, getProfile, signUp, getItems, getClothingItem} from './services/apiService';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUpForm from './Components/SignUpForm';
import CareGuide from './Components/CareGuide';
import Profile from './Components/Profile';
import Closet from './Components/Closet';
import ProtectedRoute from './Components/ProtectedRoute';
import ShowClothingItem from './Components/ShowClothingItem';
import NewClothesForm from './Components/NewClothesForm';
import Washer from './Components/Washer';
import Dryer from './Components/Dryer';

class App extends Component {
  state = {
    isSignedIn: false,
    user: {},
    washOptions: [],
    dryOptions: [],
    clothes: [],
    clothingItem: {},
    count: 0,
    itemWashOptions: {}
  }

  getOptions = async () => {
    const fetchedWashOptions = await axios('/washoptions');
    const fetchedDryOptions = await axios('/dryoptions');
    this.setState({
      washOptions: fetchedWashOptions.data.washoptions,
      dryOptions: fetchedDryOptions.data.dryoptions
    })
  }

  async componentDidMount() {
    try {
      const fetchedUser = await getProfile();
      this.getOptions();

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
      this.handleClothes(user.id)
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
      clothes: [],
      count: 0
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
      clothes: fetchedClothes.items,
      count: fetchedClothes.count
    })
  }

  render() {
    const {isSignedIn, user, washOptions, dryOptions, clothes, clothingItem, count} = this.state;
    return (
      <div className="App">
        <Navbar bg="light" variant="light" expand="lg">
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
                  <NavDropdown.Item as={Link} to="/washer">Washer</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/dryer">Dryer</NavDropdown.Item>
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
          <Route exact path="/careguide" render={(props) => (
            <CareGuide
              {...props}
              washOptions={washOptions}
              dryOptions={dryOptions}
              getOptions={this.getOptions}
            />
          )}/>
          <ProtectedRoute
            exact path="/profile"
            user={user}
            count={count}
            clothes={clothes}
            handleClothes={this.handleClothes}
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
            clothes={clothes}
            handleClothes={this.handleClothes}
            component={NewClothesForm}
          />
          <ProtectedRoute
            exact path="/washer"
            clothes={clothes}
            handleClothes={this.handleClothes}
            component={Washer}
          />
          <ProtectedRoute
            exact path="/dryer"
            clothes={clothes}
            handleClothes={this.handleClothes}
            component={Dryer}
          />
        </Switch>
      </div>
    )
  }
}

export default App;