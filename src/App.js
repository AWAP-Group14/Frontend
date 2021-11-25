import React from 'react';
import { render } from '@testing-library/react';
import './App.css';
import LandingPage from './pages/customer/LandingPage';
import BrowsePage from './pages/customer/BrowsePage';
import LogInPage from './pages/customer/LogInPage';
import SignUpPage from './pages/customer/SignUpPage';
import RestaurantLogIn from './pages/manager/RestaurantLogIn';
import RegistrationForm from './pages/manager/RegistrationForm';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SignInPage from './pages/customer/SignInPage';

// This script is responsible for shoowing all the different pages

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      restaurants: [],
      productSearchString: ""
    }
  }


  componentDidMount(){
  axios.get('https://voulutora-backend.herokuapp.com/restaurants')
    .then(response => {
      this.setState({restaurants: response.data})
    })
    .catch(err => console.log(err));

  }
  render() {
    
    let output = <BrowserRouter>

          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/signup" element={<SignUpPage/>} />
            <Route path="/login" element={<LogInPage/>} />
            <Route path="/browse" element={<BrowsePage restaurants={this.state.restaurants}/>} />

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
