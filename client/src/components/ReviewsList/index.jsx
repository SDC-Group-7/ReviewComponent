import React from 'react';

import ReviewsListItem from './ReviewsListItem';

const ReviewsList = () => {
  return (
    <div className="reviews">
      <h2 className="title">
        Reviews
      </h2>
      <div className="filter">
        Most Relavent
      </div>
      <ReviewsListItem />
    </div>
  );
};

export default ReviewsList;