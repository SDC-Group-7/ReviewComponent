import React from 'react';
import Ratings from '../../shared/Ratings';

const OverallExperience = ({experiences}) => (
  <div className="overall-experience">
    <h3 className="overall-experience__title">
      Overall Experience
    </h3>
    <span className="overall-experience__label">
      Play Experience
    </span>
    <Ratings rating={experiences.playExperience}/>
    <span className="overall-experience__label">
      Level of Difficulty
    </span>
    <Ratings rating={experiences.difficulty}/>
    <span className="overall-experience__label">
      Value for Money
    </span>
    <Ratings rating={experiences.value}/>
  </div>
);

export default OverallExperience;