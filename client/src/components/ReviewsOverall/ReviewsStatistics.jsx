import React from 'react';
import RatingBox from './RatingBox';
import OverallExperience from './OverallExperience';



const aggregateData = function (data) {
  // number of 5 star reviews
  // number of 4 star reviews
  // number of 3 star reviews
  // number of 2 star reviews
  // number of 1 star reviews

  // average of play experience
  // average of level of difficulty
  // average of value for money

  // average of overall rating
  const totalRatings = data.reduce((total, review) => {
    return total + review.rating;
  }, 0);

  const overallRating = Math.round((totalRatings / data.length) * 10) / 10;


  // average of recommendation

  // total number of reviews
  return {
    overallRating: overallRating || 0,
    reviewCount: data.length,
  };
};

const ReviewsStatistics = (props) => {
  const {
    reviews
  } = props;
  const { overallRating, reviewCount } = aggregateData(reviews);
  return (
    <div className="reviews-statistics">
      <span className="reviews-statistics__title">
        Overall Rating:
      </span>
      <RatingBox rating={overallRating} count={reviewCount}/>
      <span>
        91% would recommend this product.
      </span>
      <div className="reviews-statistics__overall-breakdown">
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
    </div>
  );
};

ReviewsStatistics.defaultProps = {
  reviews: [{
    rating: 0
  }]
};

export default ReviewsStatistics;