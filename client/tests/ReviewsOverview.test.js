import React from 'react';
import { shallow } from 'enzyme';
import ReviewsOverview from '../src/components/ReviewsOverview/';
import { Button } from '../src/shared/StyledComponents';

describe('Tests ReviewsOverview', () => {
  let reviewsOverviewWrapper;

  beforeEach(() => {
    fetch.resetMocks();
<<<<<<< HEAD
    // Todo: Mock fetch is returning something in the body that can't be returned with res.json in services
    // Look into this issue later, it doesn't break tests, but it does give an async error
    fetch.mockResponseOnce(() => new Promise((res, reject) => (res({reviews: [], productId: 1}))));

=======
    fetch.mockResponseOnce(JSON.stringify({reviews: [], productId: 1}));
>>>>>>> 19b662e052a26efe49e44c47f04fed709106cf3c
    reviewsOverviewWrapper = shallow(<ReviewsOverview />);
  });

  it('should not render reviews, but render a write a review button', () => {
    expect(reviewsOverviewWrapper.find(Button).prop('children')).toEqual('Write a review');
  });
});