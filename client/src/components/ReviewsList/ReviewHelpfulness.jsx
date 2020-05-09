import React from 'react';
import styled from 'styled-components';

import thumbsup from '../../assets/svg/thumbsup.svg';
import thumbsdown from '../../assets/svg/thumbsdown.svg';

const ReviewHelpfulness = () => (
  <div className="review__helpfulness">
    <TSpacer>
      <Title>
        Was this helpful?
      </Title>
    </TSpacer>
    <HelpfulnessCountContainer >
      <ThumbButton >
        <img src={thumbsup}></img>
        <LSpacer></LSpacer>
        <Text>1</Text>
      </ThumbButton>
      <ThumbButton >
        <img src={thumbsdown}></img>
        <LSpacer></LSpacer>
        <Text>0</Text>
      </ThumbButton>
    </HelpfulnessCountContainer>
  </div>
);

export default ReviewHelpfulness;


const HelpfulnessCountContainer = styled.div`
  display: flex;
  padding-bottom: 1.125rem;
  align-items: center;
`;

const ThumbButton = styled.button`
  margin: 1rem;
  display: flex;
  align-items: center;
  background: transparent;
  border-width: 0px;
  cursor: pointer;
`;

const Title = styled.span`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
`;


const Text = styled.span`
  color: rgb(44, 44, 44);
  font-size: 0.75rem;
  line-height: 1.1875rem;
  font-weight: 500;
`;

const LSpacer = styled.div`
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0.75rem;
  `;

const TSpacer = styled.div`
  padding-top: 0.75px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0rem;
`;