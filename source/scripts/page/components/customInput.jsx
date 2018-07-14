import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CustomInput = ({ input, placeholder, type, meta }) => (
  <div>
    <input
      {...input}
      placeholder={placeholder}
      type={type}
      className={classNames('modal-input', { 'modal-input-error': meta.touched && meta.error })}
    />
    {meta.touched && ((meta.error && <span className="modal-error">{meta.error}</span>))}
  </div>
);

CustomInput.propTypes = {
  input: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired
};

export default CustomInput;
