import React from 'react';
import styled from 'styled-components';
import ReviewsListItem from './ReviewsListItem';

const ReviewsList = ({reviews, productId}) => (
  <>
    <Title>Reviews</Title>
    <SortBy>Most Relavent</SortBy>
    <ReviewsListContainer>
      {
        reviews.map(review => (
          <ReviewsListItem key={review.id} review={review} productId={productId} />
        ))
      }
    </ReviewsListContainer>
  </>
);

export default ReviewsList;


const Title = styled.h2`
  margin: 1rem 0;
`;

const SortBy = styled.div`
  margin: 1rem 0;
  border: 1px solid rgb(224, 224, 224);
  padding: .75rem 0 .75rem 1.25rem;
  height: 3.45rem;
  align-items: center;
  display: flex;
`;

const ReviewsListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;