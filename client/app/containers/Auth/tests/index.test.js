import React from 'react';
import { shallow } from 'enzyme';
import { Auth } from 'containers/Auth';

describe('user toggle the authType', () => {
  let wrapper;

  it('should be LoginForm initially', () => {
    wrapper = shallow(<Auth authType="Login" dispatch={jest.fn()} />);
    expect(wrapper.name()).toBe('LoginForm');
  });

  it('user toggle the authType', () => {
    wrapper.instance().toggleAuthType();
    expect(wrapper.name()).toBe('SignUpForm');
  });

  it('user toggle the authType again', () => {
    wrapper.instance().toggleAuthType();
    expect(wrapper.name()).toBe('LoginForm');
  });
});
