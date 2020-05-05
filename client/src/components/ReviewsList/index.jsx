import React from 'react';

import ReviewsListItem from './ReviewsListItem';

const ReviewsList = () => {
  return (
    <>
      <h2 className="reviews-list__title">
        Reviews
      </h2>
      <div className="reviews-list__filter">
        Most Relavent
      </div>
      <div className="reviews-list">
        <ReviewsListItem />
      </div>
    </>
  );
};

export default ReviewsList;