import React from 'react';
import RatingBox from './RatingBox';
import OverallExperience from './OverallExperience';

const ReviewsStatistics = () => (
  <div className="reviews-statistics">
    <span className="reviews-statistics__title">
      Overall Rating
    </span>
    <span color="green">
      91% would recommend this product.
    </span>
    <div className="reviews-statistics__rating-breakdown">
      <h3 className="reviews-statistics__title">
        Rating
      </h3>
      <RatingBox />
      <RatingBox />
      <RatingBox />
      <RatingBox />
      <RatingBox />
    </div>
    <OverallExperience />
  </div>
);

export default ReviewsStatistics;