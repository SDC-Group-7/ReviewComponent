import React from 'react';

import ReviewInfos from './ReviewInfos';
import ReviewExperience from './ReviewExperience';
import ReviewHelpfulness from './ReviewHelpfulness';
// import Rating from '../../shared/Rating';

const ReviewsListItem = () => (
  <div className="review">
    <span className="review__date">
      Date
    </span>
    <span className="review__rating-bar">
      {/* <Rating /> */}
    </span>
    <span className="review__subject">
      Subject
    </span>
    <span className="review__user">
      Shoji
    </span>
    <span className="review__recommendation">
      I would recommend this to a friend
    </span>
    <div className="review__body">
      <ReviewInfos />
      <ReviewExperience />
    </div>
    <ReviewHelpfulness />
  </div>
);

export default ReviewsListItem;