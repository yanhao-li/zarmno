import NavBar from 'components/NavBar';
import React from 'react';
import { shallow } from 'enzyme';

describe('Not Logged In NavBar', () => {
  let wrapper;
  const auth = {
    isFetching: false,
    isAuthenticated: false,
    user: {},
  };
  beforeEach(() => {
    wrapper = shallow(
      <NavBar auth={auth} />
    );
  });

  it('should have title display', () => {
    expect(wrapper.props().title.props.children).toEqual('Menu Plus');
  });

  it('should have Logo Display', () => {
    expect(wrapper.props().iconElementLeft.type).toEqual('img');
  });

  it('should display GuestNav', () => {
    expect(wrapper.props().iconElementRight.type.name).toEqual('GuestNav');
  });
}
);

describe('Logged In NavBar', () => {
  let wrapper;
  const auth = {
    isFetching: false,
    isAuthenticated: true,
  };
  beforeEach(() => {
    wrapper = shallow(
      <NavBar auth={auth} />
    );
  });

  it('should have title display', () => {
    expect(wrapper.props().title.props.children).toEqual('Menu Plus');
  });

  it('should have Logo Display', () => {
    expect(wrapper.props().iconElementLeft.type).toEqual('img');
  });

  it('should display GuestNav', () => {
    expect(wrapper.props().iconElementRight.type.name).toEqual('UserNav');
  });
});
