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

        <PhotoStream stream={this.state.stream} />

        <Footer />
      </div>
    );
  }

  getMorePhotos() {
    /*axios.get("/api/getstream")
      .then((response) => {
        console.log(response.data.items);
      //  this.setState({
    //        items: response.data.items
      //  })
      })
      .catch((err) => {
      console.log(err)
    })*/
    const url = "/api/getstream";
    fetch(url, {method: 'get'})
    .then(results => {
      return results.json();
    }).then( data => {
      if (data.error) {
        alert("Sorry there was an error retrieving photos from flickr")
      } else {
        console.log("data");
        console.log(data);
        const stream = data.items.map((photo) => {
          return (
            {
              id: photo.link,
              title: photo.title,
              src: photo.media.m,
              author: photo.author,
              desc: photo.description,
              tags: photo.tags
            }
          );
        });
        console.log(stream);
        this.setState({stream: stream});
      }
    });
  }
}

export default App;
