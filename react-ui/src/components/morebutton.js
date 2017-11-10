import React from 'react';

const MoreButton = ({onClickMore}) => {
  return (
    <div class="row justify-content-center">
      <button type="button" class="btn btn-light m-4" onClick={onClickMore}>More...</button>
    </div>
  );
};

export default MoreButton;

