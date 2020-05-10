import React from 'react';
import styled from 'styled-components';

import ReviewsStatistics from './ReviewsStatistics';

const ReviewsOverall = ({reviews}) => {
  return (
    <div className="reviews-overall">
      <ReviewsStatistics reviews={reviews}/>
      <div className="reviews-overall__write-review">
        <WriteReviewContainer >
          <button className="btn">
            Write a Review
          </button>
        </WriteReviewContainer>
      </div>
      <div className="reviews-overall__disclaimer">
        <span>
          <p>Please note that by submitting a helpfulness vote on a review your IP address is collected and stored by our trusted third party service provider for the sole purpose of preventing multiple entries form the same IP address. To see how to controll your personal data, please see our Privacy policy.</p>
        </span>
      </div>
    </div>
  );
};

export default ReviewsOverall;


const WriteReviewContainer = styled.div`
  padding: 1rem 1rem 1.25rem;
`;