import { render } from '@testing-library/react';
import './App.css';
import LandingPage from './pages/customer/LandingPage';
import BrowsePage from './pages/customer/BrowsePage';

// This script is responsible for shoowing all the different pages

function App() {
  return (
    <BrowsePage></BrowsePage>
  );
}

export default App;
