import React from 'react';
import styled from 'styled-components';

const ReviewHelpfulness = () => (
  <div className="review__helpfulness">
    <h5 className="title">Was this helpful?</h5>
    <HelpfulnessCountContainer >
      <ThumbButton >helpful 10</ThumbButton>
      <ThumbButton >not helpful 1</ThumbButton>
    </HelpfulnessCountContainer>
  </div>
);

export default ReviewHelpfulness;


const HelpfulnessCountContainer = styled.div`
  display: flex;
`;

const ThumbButton = styled.button`
  margin: 1rem;
`;