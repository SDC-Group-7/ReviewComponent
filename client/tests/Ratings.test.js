import React from 'react';
import { shallow } from 'enzyme';
import fixture from '../../legos/fixtures';
import StarRatingBox from '../src/shared/StarRatingBox/';
import Markers from '../src/shared/StarRatingBox/Markers';


describe('Test Ratings', () => {
  const ratingsWrapper = shallow(<StarRatingBox />);
  it('should render', () => {
    expect(ratingsWrapper.exists('.rating-container')).toBe(true);
  });

  it('should render Marker', () => {
    expect(ratingsWrapper.find(Markers).exists()).toBe(true);
  });
});

describe('Test Marker', () => {
  const markerWrapper = shallow(<Markers />);
  it('should render', () => {
    expect(markerWrapper.contains('Marker')).toBe(true);
  });
});