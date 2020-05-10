import React from 'react';
import styled from 'styled-components';

import fullStars from '../../assets/svg/fullStars.svg';
import thumbsup from '../../assets/svg/thumbsup.svg';
const Markers = () => (
  <MarkerLayout>
    <StarContainer>
      <img src={fullStars} />
    </StarContainer>
    <StarContainer>
      <img src={fullStars} />
    </StarContainer>
    <StarContainer>
      <img src={fullStars} />
    </StarContainer>
    <StarContainer>
      <img src={fullStars} />
    </StarContainer>
    <StarContainer>
      <img src={fullStars} />
    </StarContainer>
  </MarkerLayout>
);

export default Markers;

const StarContainer = styled.div`
  width: 1.5625rem;
  height: 1.5625rem;
  margin-right: 0.38rem;
`;

const MarkerLayout = styled.div`
  display: flex;
  align-items: center;
`;