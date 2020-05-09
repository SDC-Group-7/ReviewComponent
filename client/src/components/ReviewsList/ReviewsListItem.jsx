import React, {Component} from 'react';
import styled from 'styled-components';
import services from '../../services';
import ReviewInfos from './ReviewInfos';
import ReviewExperience from './ReviewExperience';
import ReviewHelpfulness from './ReviewHelpfulness';
import Ratings from '../../shared/Ratings';
import {HELPFULNESS_ACTION } from '../../constants.js';

class ReviewsListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      helpfulCount: props.review.isHelpful,
      unhelpfulCount: props.review.isNotHelpful,
      hasVoted: false,
      isLoading: false,
    };
  }

  async submitVote (feedback) {
    const { review, productId} = this.props;
    const { hasVoted } = this.state;

    this.setState({isLoading: true});
    const data = {
      feedback: feedback,
      action: HELPFULNESS_ACTION[Number(hasVoted)],
    };

    try {
      await services.sendUpvote(review.id, productId, data);
      this.setState((prevState) => ({
        hasVoted: !prevState.hasVoted
      }));
    } catch (err) {
      console.error('Could not update review: ', err);
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  }

  render() {
    const { review } = this.props;
    const { helpfulCount, unhelpfulCount, isLoading } = this.state;

    return (
      <ReviewsContainer>
        <span className="review__date">
          {review.createdAt}
        </span>
        <span className="review__rating-bar">
          <Ratings rating={review.rating} />
        </span>
        <span className="review__subject">
          {review.subject}
        </span>
        <span className="review__user">
          {review.user.name}
        </span>
        {
          review.recommended ? (
            <span className="review__recommendation">
              I would recommend this to a friend
            </span>
          ) : null
        }
        <ReviewBodyContainer>
          <ReviewInfos />
          <ReviewExperience />
        </ReviewBodyContainer>
        <ReviewHelpfulness submitVote={this.submitVote.bind(this)} helpfulCount={helpfulCount} unhelpfulCount={unhelpfulCount} isLoading={isLoading}/>
      </ReviewsContainer>
    );
  }
}

export default ReviewsListItem;


const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
  border-top: 1px solid rgb(224, 224, 224);

  > span {
    margin: 1rem 0;
  }
`;

const ReviewBodyContainer = styled.div`
  display: flex;
  justify-content: space-between
`;
