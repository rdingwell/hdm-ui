import React from 'react';
import Page404 from '../../components/Pages/Page404';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<Page404 />);
  wrapper.unmount();
});
