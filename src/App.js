import React from 'react';
import { render } from '@testing-library/react';
import './App.css';
import LandingPage from './pages/customer/LandingPage';
import BrowsePage from './pages/customer/BrowsePage';
import axios from 'axios';

// This script is responsible for shoowing all the different pages

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      restaurants: [
        {
          "restaurant_name": "Mcdonalds",
          "restaurant_address": "testroad123",
          "restaurant_operating_hours": "10-18",
          "restaurant_image": "imageURL",
          "restaurant_email": "mcdonalds@mcdonalds.fi",
          "restaurant_password": "wwefweifjweoifjwoiejf",
          "restaurant_type": "1",
          "restaurant_price_level": 3
      }
      ],
      productSearchString: ""
    }
  }
  
  componentDidMount(){
  axios.get('https://voulutora-backend.herokuapp.com/restaurants')
    .then(response => {
      this.setState({restaurants: response.restaurants})
    })
    .catch(err => console.log(err));

  }
  render() {
    let output = <BrowsePage restaurants={this.state.restaurants}/>
    return (
      <>
        { output }
      </>
    )
  }

}



export default App;
