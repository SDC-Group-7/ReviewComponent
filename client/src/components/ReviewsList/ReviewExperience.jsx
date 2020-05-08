import React from 'react';

// import Rating from '../../shared/StarRatingBox';

const ReviewExperience = () => (
  <div className="review-experience">
    <div className="review-experience__play-experience">
      <label>Play Experience</label>
      {/* <StarRatingBox /> */}
    </div>
    <div className="review-experience__difficulty">
      <label>Level of Difficulty</label>
      {/* <StarRatingBox /> */}
    </div>
    <div className="review-experience__value">
      <label>Value for Money</label>
      {/* <StarRatingBox /> */}
    </div>
    <span className="review-experience__build-time">
      <span>Build Time: 8 hrs</span>
    </span>
    <span className="review-experience__building-experience">
      <span>Build Experience: Advanced LEGO builder</span>
    </span>
  </div>
);

export default ReviewExperience;