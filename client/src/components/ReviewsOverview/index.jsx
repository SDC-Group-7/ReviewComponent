import React, { Component } from 'react';
import styled from 'styled-components';

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
        reviews: res.reviews,
        productId: res.productId
      });
    } catch (err) {
      console.error('failed to fetch', err);
    }
  }

  render() {
    const { reviews, productId } = this.state;
    return (
      <OverviewContainer>
        <h1 className="reviews-overview__title">Customer Reviews</h1>
        {reviews.length ? (
          <>
            <ReviewsOverall reviews={reviews}/>
            <ReviewsList reviews={reviews} productId={productId}/>
          </>
        ) : (
          <>
            <span> Be the first to</span>
            <button className="btn">Write a review</button>
          </>
        )}
      </OverviewContainer>
    );
  }
}

export default ReviewsOverview;


const OverviewContainer = styled.div`
  width: 100%;
  max-width: 82.5rem;
  padding: 0px 0.75rem;
  margin: 0px auto;
`;