import React from 'react';
import styled from 'styled-components';

const ReviewInfos = () => (
  <ReviewBodyInfos>
    <span className="review-infos__description">
      Lorem Ipsum
    </span>
    <button className="toggle-description">
      Show More
    </button>
    <div className="review-infos__photos">
      <img src="temp"></img>
    </div>
  </ReviewBodyInfos>
);

export default ReviewInfos;


const ReviewBodyInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;
