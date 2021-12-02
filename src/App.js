import React from 'react';
import { render } from '@testing-library/react';
import './App.css';
import LandingPage from './pages/customer/LandingPage';
import BrowsePage from './pages/customer/BrowsePage';
import LogInPage from './pages/customer/LogInPage';
import RestaurantMenuPage from './pages/customer/RestaurantMenuPage';
import SignUpPage from './pages/customer/SignUpPage';
import RestaurantLogIn from './pages/manager/RestaurantLogIn';
import RegistrationForm from './pages/manager/RegistrationForm';
import NavigationBar from "./page_components/customer/NavigationBar";


import axios from 'axios';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import SignInPage from './pages/customer/SignInPage';

import Payment from './pages/customer/Payment';
import CustomerProfile from './pages/customer/CustomerProfile';
import OrderHistory from './pages/customer/OrderHistory';
import OrderStatus from './pages/customer/OrderStatus';
import ShoppingCartPage from './pages/customer/ShoppingCartPage'

import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPageManager from './pages/manager/LandingPageManager';

const jwtFromLocalStorage = window.localStorage.getItem('appAuthData')


// This script is responsible for shoowing all the different pages

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      restaurants: [],
      productSearchString: "",
      token: jwtFromLocalStorage
    }
  }


  componentDidMount(){
  axios.get('https://voulutora-backend.herokuapp.com/restaurants')
    .then(response => {
      this.setState({restaurants: response.data})
    })
    .catch(err => console.log(err));

  }

  login = (newJwt) => {
    this.state.token = newJwt;
    window.localStorage.setItem('appAuthData', newJwt)
    console.log(this.state.token.isManager+" token from the props");
  }

  logout = () => {
    this.state.token = null
    window.localStorage.removeItem('appAuthData')
    window.location.replace("/")
  }

  decodeToken = () => {
    const decodedToken = jwt.decode(this.state.token)
    console.log(decodedToken)
    return decodedToken
  }


  render() {
      
    
    //what routes are in use without login
    let authRoutes = <>
            <Route path="/" element={<LandingPage  restaurants={this.state.restaurants} jwt={this.state.token}/>} />
            <Route path="/signup" element={<SignUpPage/>} />
            <Route path="/login" element={<LogInPage login={this.login}/>} />
            <Route path="/browse" element={<BrowsePage restaurants={this.state.restaurants}/>} />
            <Route path="/manager/signup" element={<RegistrationForm/>}/>          
            <Route path="/manager/login" element={<RestaurantLogIn login={this.login}/>}/>
            <Route path="/restaurant/:restaurantName" element={<RestaurantMenuPage jwt={this.state.token} logout={this.logout}/>}/>
    </>

    //logged in routes
    if (this.decodeToken() != null) {

      if (this.decodeToken().isManager == undefined) {
        authRoutes = <>
            <Route path="/" element={<LandingPage  restaurants={this.state.restaurants} jwt={this.state.token} logout={this.logout}/>} />
    </>
        
      }

      if (this.decodeToken().isManager == false) {
        authRoutes = <>
            
            <Route path="/" element={<LandingPage  restaurants={this.state.restaurants} jwt={this.state.token} logout={this.logout}/>} />
            <Route path="/browse" element={<BrowsePage restaurants={this.state.restaurants} jwt={this.state.token} logout={this.logout}/>} />
            <Route path="/profile" element={<CustomerProfile jwt={this.state.token} logout={this.logout}/>} />
            <Route path="/history" element={<OrderHistory/>} />
            <Route path="/restaurant/test" element={<RestaurantMenuPage/>}/>
            <Route path="/status" element={<OrderStatus/>} />
            <Route path="/manager/signup" element={<RegistrationForm/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/cart" element={<ShoppingCartPage/>}/>
            <Route path="/restaurant/:restaurantName" element={<RestaurantMenuPage jwt={this.state.token} logout={this.logout}/> }/>
      </>
      }

      if (this.decodeToken().isManager == true) {
        authRoutes = <>
            
            <Route path="/" element={<LandingPageManager jwt={this.state.token} logout={this.logout}/>} />
      </>
      }

      
    }
    
    let output = <BrowserRouter>

          <Routes>
            {authRoutes}

            
          </Routes>

    </BrowserRouter>
    
   

    return (
      <>
        { output }
      </>
    )
  
  }
}

export default App;
