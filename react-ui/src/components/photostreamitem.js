import React from 'react';
import './photostreamitem.css';

const PhotoStreamItem = ({photo}) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <img className="card-img-top" src={photo.src} alt={photo.alt} />
        <div className="card-body">
          <span className="card-title"><h4>Card title</h4></span>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
};

export default PhotoStreamItem;
