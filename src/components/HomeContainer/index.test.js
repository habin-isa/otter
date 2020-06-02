import React from 'react';
import { shallow } from 'enzyme';
import HomeContainer from '.';

describe('HomeContainer component', () => {
  it('renders without crashing', () => {
    shallow(<HomeContainer />);
  });
});
