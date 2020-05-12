import React from 'react';
import { shallow } from 'enzyme';
import fixture from '../../legos/fixtures';
import ReviewsOverview from '../src/components/ReviewsOverview/';
import { Button } from '../src/shared/StyledComponents';

describe('Tests ReviewsOverview', () => {
  let reviewsOverviewWrapper;

  beforeEach(() => {
    fetch.resetMocks();
    fetch.mockResponseOnce(JSON.stringify({reviews: [], productId: 1}));
    reviewsOverviewWrapper = shallow(<ReviewsOverview />);
  });

  it('should not render reviews, but render a write a review button', () => {
    expect(reviewsOverviewWrapper.find(Button).prop('children')).toEqual('Write a review');
  });
});