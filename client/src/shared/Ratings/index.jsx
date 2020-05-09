import React from 'react';

import Markers from './Markers';

const Ratings = ({rating}) => (
  <div className="rating-container">
    <Markers />
    <div className="rating-container__display">
      {rating}
    </div>
  </div>
);

export default Ratings;