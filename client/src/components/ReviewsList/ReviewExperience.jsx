import React from 'react';

import Rating from '../../shared/Rating';

const ReviewExperience = () => (
  <div className="review-experience">
    <div className="review-experience__play-experience">
      <label>Play Experience</label>
      <Rating />
    </div>
    <div className="review-experience__difficulty">
      <label>Level of Difficulty</label>
      <Rating />
    </div>
    <div className="review-experience__value">
      <label>Value for Money</label>
      <Rating />
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