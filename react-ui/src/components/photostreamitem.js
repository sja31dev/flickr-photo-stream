import React from 'react';
import './photostreamitem.css';

const PhotoStreamItem = ({photo}) => {
  return (
    <div className="col-sm-3">
      <div className="card h-100">
        <img className="card-img-top" src={photo.src} alt={photo.title} />
        <div className="card-body p-2">
          <span className="card-title"><span className="h5"><a href={photo.link} target="_blank">{photo.title}</a></span> by <a href={photo.authorLink} target="_blank">{photo.author}</a></span>
          <p className="card-text small text-muted" dangerouslySetInnerHTML={{ __html: photo.desc }}></p>
          <p className="card-text small">Tags: {photo.tags.split(" ").join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoStreamItem;
