import React from 'react';
import './photostream.css';

import PhotoStreamItem from './photostreamitem';

const PhotoStream = ({stream}) => {

  if (stream) {
    const streamItems = stream.map((photo) => {
      return (
        <PhotoStreamItem
          key={photo.id}
          poll={photo} />
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
