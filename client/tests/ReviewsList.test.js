import React from 'react';
import { shallow } from 'enzyme';
import ReviewsList from '../src/components/reviewsList/index.jsx';

const reviews =
[{
  id: 1,
  rating: 4,
  recommended: { type: 'Buffer', data: [ 1 ] },
  subject: 'lorum ipsum 3',
  isHelpful: 0,
  isNotHelpful: 9,
  experience:
   { playExperience: 4, difficulty: 2, value: 4, buildTime: 18 },
  user: { name: 'Lonna', age: 104 }
}];

const wrapper = shallow(<ReviewsList reviews={reviews}/>);

describe('Reviews List', () => {
  it('should correctly render', () => {
    expect(wrapper.exists()).toBe(true);
  });
});


