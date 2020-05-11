import React from 'react';
import { shallow } from 'enzyme';
import fixture from '../../legos/fixtures';
import ReviewsOverview from '../src/components/ReviewsOverview/';
import { Button } from '../src/shared/StyledComponents';

describe('Tests ReviewsOverview', () => {
  const reviewsOverviewWrapper = shallow(<ReviewsOverview reviews={[]}/>);

  it('should not render reviews, but render a write a review button', () => {
    expect(reviewsOverviewWrapper.find(Button).prop('children')).toEqual('Write a review');
  });
});