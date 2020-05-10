import React from 'react';
import Ratings from '../../shared/Ratings';
import styled from 'styled-components';
import { MARKERS } from '../../constants';

const OverallExperience = ({experiences}) => (
  <div className="overall-experience">
    <h3 className="overall-experience__title">
      Overall Experience
    </h3>
    <div>
      <span className="overall-experience__label">
        Play Experience
      </span>
      <Ratings rating={experiences.playExperience} marker={MARKERS.LEGO}/>
    </div>
    <Spacer bm={1} />
    <div>
      <span className="overall-experience__label">
        Level of Difficulty
      </span>
      <Ratings rating={experiences.difficulty} marker={MARKERS.LEGO}/>
    </div>
    <Spacer bm={1} />
    <div>
      <span className="overall-experience__label">
        Value for Money
        <Ratings rating={experiences.value} marker={MARKERS.LEGO}/>
      </span>
    </div>
  </div>
);

export default OverallExperience;

const Spacer = styled.div(props => ({
  'padding-top': `${props.tm}rem` || '0px',
  'padding-right': `${props.rm}rem` || '0px',
  'padding-bottom': `${props.bm}rem` || '0px',
  'padding-left': `${props.lm}rem` || '0px',
}));

const OverallExperienceContainer = styled.div`
  display: flex;
  padding: 1.25rem 0px 0.9375rem;
`;