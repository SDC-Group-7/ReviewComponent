import React from 'react';
import RatingContainer from './RatingContainer';

const OverallExperience = () => (
  <div className="overall-experience">
    <h3 className="overall-experience__title">
      Overall Experience
    </h3>
    <span className="overall-experience__label">
      Play Experience
    </span>
    <RatingContainer />
    <span className="overall-experience__label">
      Level of Difficulty
    </span>
    <RatingContainer />
    <span className="overall-experience__label">
      Value for Money
    </span>
    <RatingContainer />
  </div>
);

export default OverallExperience;