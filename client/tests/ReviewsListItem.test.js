import React from 'react';
import { shallow, mount } from 'enzyme';
import fixture from '../../legos/fixtures';
import ReviewsListItem from '../src/components/ReviewsList/ReviewsListItem';
import ReviewHelpfulness from '../src/components/ReviewsList/ReviewHelpfulness';

const review = fixture.reviews[0];
const wrapper = shallow(<ReviewsListItem review={review}/>);

describe('Test ReviewsListItem', () => {
  it('should have the correct date', () => {
    expect(wrapper.find('.review__date').text()).toEqual(review.createdAt);
  });

  it('should have the render rating', () => {
    expect(wrapper.find('Ratings').exists()).toBe(true);
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

  describe('Test ReviewHelpfulness', () => {
    let helpfulnessWrapper;
    const mockSubmitVote = jest.fn();

    beforeEach(() => {
      helpfulnessWrapper = mount(<ReviewHelpfulness submitVote={mockSubmitVote} helpfulCount={1} unhelpfulCount={2}/>);
    });

    it('Should render', () => {
      expect(helpfulnessWrapper.exists()).toBe(true);
    });

    it('Should render helpful count', () => {
      expect(helpfulnessWrapper.find('span').at(1).props().children).toEqual(1);
    });

    it('Should render unhelpful count', () => {
      expect(helpfulnessWrapper.find('span').at(2).props().children).toEqual(2);
    });

    it('calls submitVote when clicked on thumbsup', () => {
      helpfulnessWrapper.find('button').at(0).simulate('click');
      expect(mockSubmitVote.mock.calls.length).toBe(1);
      expect(mockSubmitVote.mock.calls[0][0]).toBe('is_helpful');
    });

    it('calls submitVote when clicked on thumbsdown', () => {
      helpfulnessWrapper.find('button').at(1).simulate('click');
      expect(mockSubmitVote.mock.calls.length).toBe(1);
      expect(mockSubmitVote.mock.calls[0][0]).toBe('is_not_helpful');
    });

    it('should test both buttons are disabled while its loading', () => {
      let isLoading = true;
      helpfulnessWrapper.setProps({isLoading});
      helpfulnessWrapper.update();
      helpfulnessWrapper.find('button').at(0).simulate('click');
      helpfulnessWrapper.find('button').at(1).simulate('click');
      expect(mockSubmitVote.mock.calls.length).toBe(0);
      expect(mockSubmitVote.mock.calls.length).toBe(0);
      isLoading = false;
      helpfulnessWrapper.setProps({isLoading});
      helpfulnessWrapper.update();
      helpfulnessWrapper.find('button').at(0).simulate('click');
      helpfulnessWrapper.find('button').at(1).simulate('click');
      expect(mockSubmitVote.mock.calls.length).toBe(2);
    });

    // TODO: Finish adding tests when the service to fetch reviews is finished
    // it should remove helpful if unhelpful is clicked
    // it hsould add to unhelpful if unhelpful is clicked
    // it hsould remove unhelpful if helpful is clicked
    // it should remove helpful if helpful is clicked twice
  });
});