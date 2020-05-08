import React from 'react';
import { shallow } from 'enzyme';
import fixture from '../../legos/fixtures';
import ReviewsListItem from '../src/components/ReviewsList/ReviewsListItem';

const review = fixture.reviews[0];
const wrapper = shallow(<ReviewsListItem review={review}/>);

describe('Test ReviewsListItem', () => {
  it('should have the correct date', () => {
    expect(wrapper.find('.review__date').text()).toEqual(review.createdAt);
  });

  it('should have the render rating', () => {
    expect(wrapper.find('StarRatingBox').exists()).toBe(true);
  });

  it('should have the rendered subject', () => {
    expect(wrapper.find('.review__subject').text()).toBe(review.subject);
  });

  it('should have the rendered user', () => {
    expect(wrapper.find('.review__user').text()).toBe(review.user.name);
  });

  it('should not show recommended', () => {
    const newReview = fixture.reviews[1];
    const conditionalWrapper = shallow(<ReviewsListItem review={newReview} />);
    expect(conditionalWrapper.find('.review__recommendation').exists()).toBe(false);
  });

  it('should show recommended', () => {
    expect(wrapper.find('.review__recommendation').text()).toBe('I would recommend this to a friend');
  });

  it('should shallow render ReviewInfos', () => {
    expect(wrapper.find('ReviewInfos').exists()).toBe(true);
  });
});


