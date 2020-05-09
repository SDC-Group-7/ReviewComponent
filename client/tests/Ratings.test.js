import React from 'react';
import { shallow } from 'enzyme';
import fixture from '../../legos/fixtures';
import Ratings from '../src/shared/Ratings/';
import Markers from '../src/shared/Ratings/Markers';


describe('Test Ratings', () => {
  const ratingsWrapper = shallow(<Ratings />);
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