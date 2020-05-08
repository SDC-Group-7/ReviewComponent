import React from 'react';

const RatingBox = ({star = null, count}) => (
  <button className="rating-box">
    {
      star ? (<span>{star} stars</span>) : null
    }
    {/* TODO <ProgressBar /> */}
    progress bar
    <span className="rating-box__count" data-test={count}>{count}</span>
    <span>Reviews</span>
  </button>
);

export default RatingBox;