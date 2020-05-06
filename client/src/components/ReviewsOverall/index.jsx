import React from 'react';

import ReviewsStatistics from './ReviewsStatistics';

const ReviewsOverall = () => (
  <div className="reviews-overall">
    <ReviewsStatistics />
    <button className="reviews-overall__write-review btn">
      Write a Review
    </button>
    <div className="reviews-overall__disclaimer">
      <span>
        <p>Please note that by submitting a helpfulness vote on a review your IP address is collected and stored by our trusted third party service provider for the sole purpose of preventing multiple entries form the same IP address. To see how to controll your personal data, please see our Privacy policy.</p>
      </span>
    </div>
  </div>
);

export default ReviewsOverall;