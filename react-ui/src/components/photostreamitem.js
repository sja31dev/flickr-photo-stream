import React from 'react';
import './photostreamitem.css';

const PhotoStreamItem = ({photo}) => {
  console.log("photo");
  console.log(photo);
  return (
    <div className="col-sm-3">
      <div className="card h-100">
        <img className="card-img-top" src={photo.src} alt={photo.title} />
        <div className="card-body">
          <span className="card-title"><h4>{photo.title}</h4>{photo.author}</span>
          <p className="card-text" dangerouslySetInnerHTML={{ __html: photo.desc }}></p>
          <p className="card-text">{photo.tags}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
};

export default PhotoStreamItem;
