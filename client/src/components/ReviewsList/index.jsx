import React from 'react';
import styled from 'styled-components';
import ReviewsListItem from './ReviewsListItem';
import dropDownArrowUrl from '../../assets/svg/selectDropDownArrow/selectDropDownArrow.svg';

const ReviewsList = ({reviews, productId}) => (
  <>
    <Title>Reviews</Title>
    <SelectWrapper>
      <SelectLabel>
        <Select>
          <Option>Date - newest first</Option>
          <Option>Date - oldest first</Option>
          <Option>Rating - High to Low</Option>
          <Option>Rating - Low To High</Option>
          <Option>Helpfulness</Option>
          <Option>Most relavent</Option>
        </Select>
        <span>Most relavent</span>
      </SelectLabel>
      <DropDownArrowTransformation src={dropDownArrowUrl} />
    </SelectWrapper>
    <ReviewsListContainer>
      {
        reviews.map(review => (
          <ReviewsListItem key={review.id} review={review} productId={productId} />
        ))
      }
    </ReviewsListContainer>
  </>
);

export default ReviewsList;


const Title = styled.h2`
  margin: 1rem 0;
`;

const SortBy = styled.div`
  margin: 1rem 0;
  border: 1px solid rgb(224, 224, 224);
  padding: .75rem 0 .75rem 1.25rem;
  height: 3.45rem;
  align-items: center;
  display: flex;
`;

const ReviewsListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: rgb(44, 44, 44);
  height: 3.45rem;
  border: 1px solid rgb(224, 224, 224);
  background: rgb(255, 255, 255);
  padding-left: 0.75rem;
`;

const SelectLabel = styled.label`
    display: flex;
    flex-direction: column;
`;

const Select = styled.select`
  width: 100%;
  height: 100%;
  box-shadow: none;
  opacity: 0;
  position: absolute;
  right: 0px;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 2;
  text-align: left;
  font-size: 1rem;
  border-style: none;
`;

const Option = styled.option`
  font-weight: normal;
  white-space: pre;
  min-height: 1.2em;
  padding: 0px 2px 1px;
`;

const DropDownArrowTransformation = styled.img`
  margin: 0 1.25rem;
  transform: rotate(90deg);
  display: block;
  transition: transform 0.1s linear 0s;
`;