import React from 'react';
import { shallow } from 'enzyme';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import Auth from 'containers/Auth';
import CloseIcon from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton';
import GuestNav from '../GuestNav';

describe('Guest Nav Apperance', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <GuestNav />
    );
  });

  it('should display two buttons', () => {
    expect(wrapper.find(RaisedButton).length).toBe(2);
  });

  it('should contain the dialog', () => {
    expect(wrapper.find(Dialog).length).toBe(1);
  });

  it('Auth should be inside the Dialog', () => {
    expect(wrapper.find(Auth).length).toBe(1);
  });

  it('the dialog should be hidden', () => {
    expect(wrapper.find(Dialog).props().open).toBe(false);
  });

  it('should have close button for the dialog', () => {
    expect(wrapper.find(CloseIcon).length).toBe(1);
  });
});

describe('Guest Nav Dialog test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <GuestNav />
    );
  });

  it('user click the login button, dialog show up', () => {
    const LoginBtn = wrapper.find({ label: 'LOG IN' }).first();
    LoginBtn.simulate('click', { preventDefault() {} });
    expect(wrapper.find(Dialog).first().props().open).toBe(true);
    expect(wrapper.state().authType).toEqual('Login');
  });

  it('user click the closeButton to close the dialog', () => {
    const CloseBtn = wrapper.find(IconButton).first();
    CloseBtn.simulate('click', { preventDefault() {} });
    expect(wrapper.find(Dialog).first().props().open).toBe(false);
  });

  it('user click the signup button, dialog show up', () => {
    const SignupBtn = wrapper.find({ label: 'SIGN UP' }).first();
    SignupBtn.simulate('click', { preventDefault() {} });
    expect(wrapper.find(Dialog).first().props().open).toBe(true);
    expect(wrapper.state().authType).toEqual('Sign Up');
  });
});
