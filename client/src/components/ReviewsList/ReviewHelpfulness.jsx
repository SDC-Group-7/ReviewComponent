import React from 'react';
import styled from 'styled-components';

import thumbsup from '../../assets/svg/thumbsup.svg';
import thumbsdown from '../../assets/svg/thumbsdown.svg';

const ReviewHelpfulness = () => (
  <div className="review__helpfulness">
    <h5 className="title">Was this helpful?</h5>
    <HelpfulnessCountContainer >
      <ThumbButton >
        <img src={thumbsup}></img>
        <Text>1</Text>
      </ThumbButton>
      <ThumbButton >
        <img src={thumbsdown}></img>
        <Text>0</Text>
      </ThumbButton>
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

const Text = styled.span`
  color: rgb(44, 44, 44);
  font-size: 0.75rem;
  line-height: 1.1875rem;
  font-weight: 500;
`;