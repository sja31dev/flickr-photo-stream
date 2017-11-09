import React, { Component } from 'react';
import './App.css';


import Header from './components/header';
import Footer from './components/footer';
import PhotoStream from './components/photostream';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <PhotoStream />

        <Footer />
      </div>
    );
  }
}

export default App;
