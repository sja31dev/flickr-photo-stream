import React, { Component } from 'react';
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
          const descParts = photo.description.match(/\<p\>.+?\<\/p\>/g);
          var desc;
          if (descParts && descParts.length >= 3) {
            desc = descParts[2];
          }
          else
          {
            desc = "No description";
          }
          // Build Author link
          var authorLink = "https://www.flickr.com/photos/" + photo.author_id;
          // Extract Authors actual name from author field
          var author = photo.author.split('("')[1].split('")')[0];
          return (
            {
              id: photo.link,
              title: photo.title,
              src: photo.media.m,
              link: photo.link,
              author: author,
              authorLink: authorLink,
              desc: desc,
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
