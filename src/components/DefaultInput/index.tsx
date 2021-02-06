import React from 'react';
import CustomInputProps from '../../types/inputs';
import './index.scss';

interface Props extends CustomInputProps {
  type?: string;
  value: string;
}

const DefaultInput = ({
  id,
  name,
  label,
  error,
  handleChange,
  ...props
}: Props) => (
  <div className={`default-input${error ? ' error' : ''}`}>
    <label htmlFor={id} className="default-input__title">
      {label}
    </label>
    <input type="text" id={id} name={name} onChange={handleChange} {...props} />
    {error && <span className="error-field">{error}</span>}
  </div>
);

export default DefaultInput;
