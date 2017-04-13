import React from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({ name, value, label, error, type, onChange }) => (
  <div className={classnames('form-group', { 'has-danger': error })}>
    <label className="form-control-label" htmlFor={name}>{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      className="form-control"
    />
    { error && <span className="form-control-feedback">{ error}</span> }
  </div>
  );

TextFieldGroup.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

TextFieldGroup.defaultProps = {
  type: 'text',
};

export default TextFieldGroup;
