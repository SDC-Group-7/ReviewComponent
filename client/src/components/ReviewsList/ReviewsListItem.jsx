import React from 'react';

import ReviewInfos from './ReviewInfos';
import ReviewExperience from './ReviewExperience';
import ReviewHelpfulness from './ReviewHelpfulness';
import Ratings from '../../shared/Ratings';

const ReviewsListItem = ({review}) => (
  <div className="review">
    <span className="review__date col">
      {review.createdAt}
    </span>
    <span className="review__rating-bar col">
      <Ratings rating={review.rating} />
    </span>
    <span className="review__subject col">
      {review.subject}
    </span>
    <span className="review__user col">
      {review.user.name}
    </span>
    {
      review.recommended ? (
        <span className="review__recommendation col">
          I would recommend this to a friend
        </span>
      ) : null
    }
    <div className="review__body col">
      <ReviewInfos />
      <ReviewExperience />
    </div>
    <ReviewHelpfulness />
  </div>
);

export default ReviewsListItem;