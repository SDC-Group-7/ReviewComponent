import React from 'react';

const RatingBox = ({rating, count}) => (
  <button className="rating-box">
    <span>5 stars</span>
    {/* TODO <ProgressBar /> */}
    progress bar
    <span className="rating-box__rating">{rating}</span>
    <span>{count}</span>
    <span>Reviews</span>
  </button>
);

export default RatingBox;