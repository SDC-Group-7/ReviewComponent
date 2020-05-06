import React from 'react';

import Marker from './Marker';

const Rating = () => (
  <div className="rating-container">
    <Marker />
    <Marker />
    <Marker />
    <Marker />
    <Marker />
    <div className="rating-container__display">
      5.0
    </div>
  </div>
);

export default Rating;