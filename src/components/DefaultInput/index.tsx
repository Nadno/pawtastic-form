import React, { ChangeEvent } from 'react';
import './index.scss';

interface Props {
  id: string;
  name: string;
  label: string;
  error?: string;
  handleChange(e: ChangeEvent): void;
  [propName: string]: any;
}

const DefaultInput = ({
  id,
  name,
  label,
  error,
  handleChange,
  ...props
}: Props) => {
  return (
    <div className={`default-input${error ? ' error' : ''}`}>
      <label htmlFor={id} className="default-input__title">
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        onChange={handleChange}
        {...props}
      />
      {error && <span className="error-field">{error}</span>}
    </div>
  );
};

export default DefaultInput;
