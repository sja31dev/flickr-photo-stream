import React from 'react';

const MoreButton = ({onClickMore}) => {
  return (
    <div className="container">
      <div class="row justify-content-center">
        <button type="button" class="btn btn-light m-4" onClick={onClickMore}>More...</button>
      </div>
    </div>
  );
};

export default MoreButton;
