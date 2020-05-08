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
    try {
      const res = await Services.getReviews(1);
      this.setState({
        reviews: res.reviews
      });
    } catch (err) {
      console.error('failed to fetch', err);
    }
  }

  render() {
    const { reviews } = this.state;

    return (
      <div className="reviews-overview">
        <h1 className="reviews-overview__title">Customer Reviews</h1>
        {reviews.length ? (
          <>
            <ReviewsOverall reviews={reviews}/>
            <ReviewsList reviews={reviews} />
          </>
        ) : (
          <>
            <span> Be the first to</span>
            <button className="btn">Write a review</button>
          </>
        )}
      </div>
    );
  }
}

export default ReviewsOverview;