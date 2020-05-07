import React from 'react';
import { mount } from 'enzyme';
import fixture from '../../legos/fixtures';
import ReviewsOverall from '../src/components/ReviewsOverall';
import ReviewsStatistics from '../src/components/ReviewsOverall/ReviewsStatistics';
import OverallExperience from '../src/components/ReviewsOverall/OverallExperience';


describe('Test ReviewsOverall', () => {
  const overallWrapper = mount(<ReviewsOverall />);
  it('should render', () => {
    expect(overallWrapper.exists('.reviews-overall')).toBe(true);
  });
});

describe('Test ReviewsStatistics', () => {
  const statisticsWrapper = mount(<ReviewsStatistics reviews={fixture.reviews}/>);
  it('should render', () => {
    expect(statisticsWrapper.exists('.reviews-statistics')).toBe(true);
  });

  it('should have the reviews props', () => {
    console.log(statisticsWrapper);
    expect(statisticsWrapper.prop('reviews')).toEqual(fixture.reviews);
  });

  // I need to write a test
  // this test will check that the aggregated data has all the right values

});

describe('Test OverallExperience', () => {
  const overallExperienceWrapper = mount(<OverallExperience />);
  it('should render', () => {
    expect(overallExperienceWrapper.exists('.overall-experience')).toBe(true);
  });
});
