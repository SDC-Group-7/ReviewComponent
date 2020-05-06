import React from 'react';

import ReviewInfos from './ReviewInfos';
import ReviewExperience from './ReviewExperience';
import ReviewHelpfulness from './ReviewHelpfulness';
import Rating from '../../shared/Rating';

const ReviewsListItem = () => (
  <div className="review">
    <span className="review__date col">
      Date
    </span>
    <span className="review__rating-bar col">
      <Rating />
    </span>
    <span className="review__subject col">
      Subject
    </span>
    <span className="review__user col">
      Shoji
    </span>
    <span className="review__recommendation col">
      I would recommend this to a friend
    </span>
    <div className="review__body col">
      <ReviewInfos />
      <ReviewExperience />
    </div>
    <ReviewHelpfulness />
  </div>
);

export default ReviewsListItem;