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

      ],
      productSearchString: ""
    }
  }


  componentDidMount(){
  axios.get('https://voulutora-backend.herokuapp.com/restaurants')
    .then(response => {
      console.log(response);
      this.setState({restaurants: response.data})
    })
    .catch(err => console.log(err));

  }
  render() {
    let output = <BrowsePage restaurants={this.state.restaurants} />
    return (
      <>
        { output }
      </>
    )
  }

}



export default App;
