import React from 'react';
import { shallow } from 'enzyme';
import fixture from '../../legos/fixtures';
import ReviewsOverview from '../src/components/ReviewsOverview/';


describe('Tests ReviewsOverview', () => {
  const reviewsOverviewWrapper = shallow(<ReviewsOverview />);
  it('should render', () => {
    expect(reviewsOverviewWrapper.exists('.reviews-overview')).toBe(true);
  });
});