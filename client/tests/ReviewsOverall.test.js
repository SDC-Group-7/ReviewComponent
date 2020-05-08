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
    expect(statisticsWrapper.prop('reviews')).toEqual(fixture.reviews);
  });

  it('should have aggregated ratings', () => {
    // this should test that the ratings have been aggrevated
    // it should do this by getting all of the reviews and dividing them by the number of reviews to get the average

    const totalRatings = fixture.reviews.reduce((total, review) => {
      return total + review.rating;
    }, 0);

    const averageRatings = totalRatings / fixture.reviews.length;

    // once i get the reviews, I want to mount the ocmponent
    // check the overall rating and match it

    expect(statisticsWrapper.find('reviews-statistics__title').contains(totalRatings)).toBe(true);
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
