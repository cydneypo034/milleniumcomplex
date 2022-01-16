import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './NavigationBar/navbar.jsx';
import HomePage from './Home/Home.jsx';
import Footer from './Footer/Footer.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
         <Router>
          <NavBar />
          <Route exact path='/' component={HomePage} />
          <Footer />          
          </Router>

      </div>
    )
  }
};