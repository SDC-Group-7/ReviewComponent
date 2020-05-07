import React from 'react';
import { shallow } from 'enzyme';
import fixture from '../../legos/fixtures';
import ReviewsOverall from '../src/components/ReviewsOverall';
import ReviewsStatistics from '../src/components/ReviewsOverall/ReviewsStatistics';
import OverallExperience from '../src/components/ReviewsOverall/OverallExperience';


describe('Test ReviewsOverall', () => {
  const overallWrapper = shallow(<ReviewsOverall />);
  it('should render', () => {
    expect(overallWrapper.exists('.reviews-overall')).toBe(true);
  });
});

describe('Test ReviewsStatistics', () => {
  const statisticsWrapper = shallow(<ReviewsStatistics />);
  it('should render', () => {
    expect(statisticsWrapper.exists('.reviews-statistics')).toBe(true);
  });
});

describe('Test OverallExperience', () => {
  const overallExperienceWrapper = shallow(<OverallExperience />);
  it('should render', () => {
    expect(overallExperienceWrapper.exists('.overall-experience')).toBe(true);
  });
});
