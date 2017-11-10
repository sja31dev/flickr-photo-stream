import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import PhotoStream from './components/photostream';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      stream: null
    };
  }

  componentDidMount() {
    this.getMorePhotos();
  }

  render() {
    return (
      <div className="App">
        <Header />

        <PhotoStream />

        <Footer />
      </div>
    );
  }

  getMorePhotos() {
    axios.get("https://api.flickr.com/services/feeds/photos_public.gne?tags=kitten&format=json&nojsoncallback=true")
      .then((response) => {
        console.log(response.data.items);
      /*  this.setState({
            items: response.data.items
        })*/
      })
      .catch((err) => {
      console.log(err)
      })
    /*const url = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true";
    fetch(url, {method: 'get'})
    .then(results => {
      console.log(results);
      return results.json();
    }).then( data => {
      if (data.error) {
        alert("Sorry there was an error retrieving photos from flickr")
      } else {
        console.log(data);
      }
    });*/
  }
}

export default App;
