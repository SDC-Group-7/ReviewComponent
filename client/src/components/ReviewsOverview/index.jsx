import React, { Component } from 'react';
import Services from '../../services';
import ReviewsList from '../ReviewsList';
import ReviewsOverall from '../ReviewsOverall';

class ReviewsOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    };
  }

  async componentDidMount() {
    const res = await Services.getReviews(1);
    this.setState({
      reviews: res.reviews
    });
  }

  render() {
    const { reviews } = this.state;

    return (
      <div className="reviews-overview">
        <h1 className="reviews-overview__title">Customer Reviews</h1>
        <ReviewsOverall />
        <ReviewsList reviews={reviews} />
      </div>
    );
  }
}

export default ReviewsOverview;