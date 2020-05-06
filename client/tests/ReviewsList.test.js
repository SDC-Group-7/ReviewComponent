import React from 'react';
import { shallow } from 'enzyme';
import ReviewsList from '../src/components/reviewsList/index.jsx';

const wrapper = shallow(<ReviewsList />);

describe('Reviews List', () => {
  it('should correctly render', () => {
    expect(wrapper.exists()).toBe(true);
  });
});


