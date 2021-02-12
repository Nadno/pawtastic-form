import React from 'react';
import CustomInputProps from '../../types/inputs';
import './index.scss';

const DefaultInput: React.FC<CustomInputProps> = ({
  id,
  label,
  error,
  handleChange,
  ...props
}) => (
  <div className={`default-input${error ? ' error' : ''}`}>
    <label htmlFor={id} className="default-input__title">
      {label}
    </label>
    <input type="text" id={id} onChange={handleChange} autoComplete="on" {...props} />
    {error && <span className="error-field">{error}</span>}
  </div>
);

export default DefaultInput;
