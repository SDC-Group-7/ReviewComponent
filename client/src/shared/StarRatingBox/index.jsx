import React from 'react';

import Markers from './Markers';

const StarRatingBox = ({rating}) => (
  <div className="rating-container">
    // This markers will render the stars and fill them in
    <Markers />
    <div className="rating-container__display">
      {rating}
    </div>
  </div>
);

export default StarRatingBox;