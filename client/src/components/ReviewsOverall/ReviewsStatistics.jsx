import React from 'react';
import RatingBox from './RatingBox';
import OverallExperience from './OverallExperience';
import Ratings from '../../shared/Ratings';


const getSumExperience = (data) => {
  return data.reduce((result, review) => {
    let experience = review.experience;
    result.playExperience += experience.playExperience;
    result.difficulty += experience.difficulty;
    result.value += experience.value;
    return result;
  }, {playExperience: 0, difficulty: 0, value: 0});
};

const aggregateExperiences = (sums) => {
  Object.keys(sums).forEach((key, _, arr) => {
    sums[key] = Math.round((sums[key] / arr.length) * 10) / 10;
  });
  return sums;
};

const aggregateData = function (data) {
  const aggregatedReviewsCount = data.reduce((result, review) => {
    result[review.rating] += 1;
    return result;
  }, {1: 0, 2: 0, 3: 0, 4: 0, 5: 0});

  // Get aggregated review experiences -> 5.0
  const sumExperiences = getSumExperience(data);
  const aggregatedExperiences = aggregateExperiences(sumExperiences);

  // Get overall rating -> 4.3
  const totalRatings = data.reduce((total, review) => {
    return total + review.rating;
  }, 0);
  const overallRating = Math.round((totalRatings / data.length) * 10) / 10;

  // Get recommendation percentage of a review -> 91.5
  const recommendationResult = data.reduce((total, review) => {
    return review.recommended ? total + 1 : total;
  }, 0) / data.length * 100;
  const overallRecommendation = Math.round(recommendationResult * 10) / 10;

  return {
    overallRating: overallRating || 1,
    overallReviewCount: data.length,
    overallRecommendation,
    aggregatedReviewsCount,
    aggregatedExperiences
  };
};

const ReviewsStatistics = (props) => {
  const {
    reviews
  } = props;
  const { overallRating, overallReviewsCount, overallRecommendation, aggregatedReviewsCount, aggregatedExperiences } = aggregateData(reviews);
  return (
    <div className="reviews-statistics">
      <span className="reviews-statistics__title">
        Overall Rating:
      </span>
      <Ratings rating={overallRating} />
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
        <OverallExperience experiences={aggregatedExperiences}/>
      </div>
    </div>
  );
};

export default ReviewsStatistics;