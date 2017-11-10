import React from 'react';
import './photostream.css';

import PhotoStreamItem from './photostreamitem';

const PhotoStream = ({stream}) => {

  if (stream && stream.length) {
    console.log("psi stream");
    console.log(stream);
    const streamItems = stream.map((photo) => {
      return (
        <PhotoStreamItem
          key={photo.id}
          photo={photo} />
      );
    });
    return (
      <div className="container">
        <div className="row">
          {streamItems}
        </div>
      </div>
    );
  } else {
    return (
      <div className="loading">Loading...</div>
    );
  }
};

export default PhotoStream;
