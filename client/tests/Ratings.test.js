import React from 'react';
import { shallow } from 'enzyme';
import fixture from '../../legos/fixtures';
import Ratings from '../src/shared/Rating/';
import Marker from '../src/shared/Rating/Marker';


describe('Test Ratings', () => {
  const ratingsWrapper = shallow(<Ratings />);
  it('should render', () => {
    expect(ratingsWrapper.exists('.rating-container')).toBe(true);
  });

  it('should render Marker', () => {
    expect(ratingsWrapper.find(Marker).exists()).toBe(true);
  });
});

describe('Test Marker', () => {
  const markerWrapper = shallow(<Marker />);
  it('should render', () => {
    expect(markerWrapper.contains('Marker')).toBe(true);
  });
});