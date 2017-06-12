import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from 'components/Auth/LoginForm';
import TextField from 'material-ui/TextField';

describe('LoginForm UI', () => {
  let wrapper;
  const toggleAuthTypeMock = jest.fn();
  const dispatchMock = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<LoginForm dispatch={dispatchMock} toggleAuthType={toggleAuthTypeMock} />);
  });

  it('should have two TextField rendered', () => {
    expect(wrapper.find(TextField).length).toBe(2);
  });

  it('should have login button rendered', () => {
    expect(wrapper.find({ label: 'LOG IN' }).length).toBe(1);
  });

  it('when user click the toggle button, toggleAuthType should be called', () => {
    const toggleBtn = wrapper.find({ name: 'toggleBtn' }).first();
    toggleBtn.simulate('click');
    expect(toggleAuthTypeMock.mock.calls.length).toBe(1);
  });
});
