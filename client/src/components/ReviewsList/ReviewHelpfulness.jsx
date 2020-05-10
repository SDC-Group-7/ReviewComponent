import React from 'react';
import styled from 'styled-components';

import thumbsup from '../../assets/svg/thumbsup.svg';
import activeThumbsup from '../../assets/svg/activeThumbsup.svg';
import thumbsdown from '../../assets/svg/thumbsdown.svg';
import activeThumbsdown from '../../assets/svg/activeThumbsdown.svg';
import { HELPFULNESS_FEEDBACK } from '../../constants.js';

const ReviewHelpfulness = ({helpfulCount, unhelpfulCount, isLoading, submitVote, helpfulIsActive, unhelpfulIsActive}) => (
  <div className="review__helpfulness">
    <Spacer tm={1.125}>
      <Title>
        Was this helpful?
      </Title>
    </Spacer>
    <HelpfulnessCountContainer>
      <ThumbButton disabled={isLoading || unhelpfulIsActive} onClick={() => {
        submitVote(HELPFULNESS_FEEDBACK.POSITIVE);
      }}>
        <img src={helpfulIsActive ? activeThumbsup : thumbsup}></img>
        <Spacer lm={0.75}></Spacer>
        <Text>{helpfulCount}</Text>
      </ThumbButton>
      <ThumbButton disabled={isLoading || helpfulIsActive} onClick={() => {
        submitVote(HELPFULNESS_FEEDBACK.NEGATIVE);
      }}>
        <img src={unhelpfulIsActive ? activeThumbsdown : thumbsdown}></img>
        <Spacer lm={0.75}></Spacer>
        <Text>{unhelpfulCount}</Text>
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

const Spacer = styled.div(props => ({
  'padding-top': props.tm || '0px',
  'padding-right': props.rm || '0px',
  'padding-bottom': props.bm || '0px',
  'padding-left': `${props.lm}rem` || '0px',
}));
