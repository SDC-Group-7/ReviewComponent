import React, { Component } from 'react';
import ReviewsList from '../ReviewsList';
import ReviewsOverall from '../ReviewsOverall';

class ReviewsOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="reviews-overview">
        <h1 className="reviews-overview__title">Customer Reviews</h1>
        <ReviewsOverall />
        <ReviewsList />
      </div>
    );
  }
}

export default ReviewsOverview;