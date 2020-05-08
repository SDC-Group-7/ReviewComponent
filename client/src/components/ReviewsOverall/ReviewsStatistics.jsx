import React from 'react';
import RatingBox from './RatingBox';
import OverallExperience from './OverallExperience';
import StarRatingBox from '../../shared/StarRatingBox';

const aggregateData = function (data) {
  const aggregatedReviewsCount = data.reduce((result, review) => {
    // I want to go through each review and get the number of stars
    result[review.rating] += 1;
    return result;
  }, {1: 0, 2: 0, 3: 0, 4: 0, 5: 0});

  // average of play experience
  // average of level of difficulty
  // average of value for money

  // average of overall rating
  const totalRatings = data.reduce((total, review) => {
    return total + review.rating;
  }, 0);

  const overallRating = Math.round((totalRatings / data.length) * 10) / 10;

  // average of recommendation
  const recommendationResult = data.reduce((total, review) => {
    return review.recommended ? total + 1 : total;
  }, 0) / data.length * 100;
  const overallRecommendation = Math.round(recommendationResult * 10) / 10;

  return {
    overallRating: overallRating || 1,
    overallReviewCount: data.length,
    overallRecommendation,
    aggregatedReviewsCount,
  };
};

const ReviewsStatistics = (props) => {
  const {
    reviews
  } = props;
  const { overallRating, overallReviewsCount, overallRecommendation, aggregatedReviewsCount } = aggregateData(reviews);
  console.log(aggregatedReviewsCount);
  return (
    <div className="reviews-statistics">
      <span className="reviews-statistics__title">
        Overall Rating:
      </span>
      <StarRatingBox rating={overallRating} />
      <span className="reviews-statistics__recommendation">
        {overallRecommendation}
        % would recommend this product.
      </span>
      <div className="reviews-statistics__overall-breakdown">
        <div className="reviews-statistics__rating-breakdown">
          <h3 className="reviews-statistics__title">
            Rating
          </h3>
          <RatingBox star={5} count={aggregatedReviewsCount[5]}/>
          <RatingBox star={4} count={aggregatedReviewsCount[4]}/>
          <RatingBox star={3} count={aggregatedReviewsCount[3]}/>
          <RatingBox star={2} count={aggregatedReviewsCount[2]}/>
          <RatingBox star={1} count={aggregatedReviewsCount[1]}/>
        </div>
        <OverallExperience />
      </div>
    </div>
  );
};

export default ReviewsStatistics;