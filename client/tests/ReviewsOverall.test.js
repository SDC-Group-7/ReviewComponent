import React from 'react';
import { shallow, mount } from 'enzyme';
import fixture from '../../legos/fixtures';
import ReviewsOverall from '../src/components/ReviewsOverall';
import ReviewsStatistics from '../src/components/ReviewsOverall/ReviewsStatistics';
import OverallExperience from '../src/components/ReviewsOverall/OverallExperience';

describe('Test ReviewsOverall', () => {
  const overallWrapper = shallow(<ReviewsOverall reviews={fixture.reviews}/>);
  it('should render', () => {
    expect(overallWrapper.exists('.reviews-overall')).toBe(true);
  });
});

describe('Test ReviewsStatistics', () => {
  let statisticsWrapper;
  beforeEach(() => {
    statisticsWrapper = mount(<ReviewsStatistics reviews={fixture.reviews}/>);
  });

  it('should render', () => {
    expect(statisticsWrapper.find('.reviews-statistics').exists()).toBe(true);
  });

  it('should have the reviews props', () => {
    expect(statisticsWrapper.prop('reviews')).toEqual(fixture.reviews);
  });

  it('should have aggregated overall ratings the star rating box', () => {
    expect(statisticsWrapper.find('.rating-container__display').contains(fixture.aggregatedReview.avgRating)).toBe(true);
  });

  it('should have aggregated recommendation percent', () => {
    expect(statisticsWrapper.find('.reviews-statistics__recommendation').contains(fixture.aggregatedReview.avgRecommendation)).toBe(true);
  });

  it('should have aggregated review data for 5 star reviews, 0 reviews', () => {
    console.log(fixture.aggregatedReview);
    expect(statisticsWrapper.find('.rating-box__count').at(0).prop('children')).toEqual(fixture.aggregatedReview.countFiveReviews);
  });

  it('should have aggregated review data for 4 star reviews, 1 reviews', () => {
    console.log(fixture.aggregatedReview);
    expect(statisticsWrapper.find('.rating-box__count').at(1).prop('children')).toEqual(fixture.aggregatedReview.countFourReviews);
  });
});

describe('Test OverallExperience', () => {
  const overallExperienceWrapper = mount(<OverallExperience />);
  it('should render', () => {
    expect(overallExperienceWrapper.exists('.overall-experience')).toBe(true);
  });
});
