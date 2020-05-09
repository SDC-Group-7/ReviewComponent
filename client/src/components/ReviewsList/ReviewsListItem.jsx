import React from 'react';
import styled from 'styled-components';

import ReviewInfos from './ReviewInfos';
import ReviewExperience from './ReviewExperience';
import ReviewHelpfulness from './ReviewHelpfulness';
import Ratings from '../../shared/Ratings';

const ReviewsListItem = ({review}) => (
  <ReviewsContainer>
    <span className="review__date">
      {review.createdAt}
    </span>
    <span className="review__rating-bar">
      <Ratings rating={review.rating} />
    </span>
    <span className="review__subject">
      {review.subject}
    </span>
    <span className="review__user">
      {review.user.name}
    </span>
    {
      review.recommended ? (
        <span className="review__recommendation">
          I would recommend this to a friend
        </span>
      ) : null
    }
    <ReviewBodyContainer>
      <ReviewInfos />
      <ReviewExperience />
    </ReviewBodyContainer>
    <ReviewHelpfulness />
  </ReviewsContainer>
);

export default ReviewsListItem;


const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
  border-top: 1px solid rgb(224, 224, 224);

  > span {
    margin: 1rem 0;
  }
`;

const ReviewBodyContainer = styled.div`
  display: flex;
  justify-content: space-between
`;
