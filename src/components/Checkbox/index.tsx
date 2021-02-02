import React, { ChangeEvent } from 'react';
import './index.scss';

interface Props {
  id: string;
  name: string;
  label: string;
  error?: string;
  value?: boolean;
  handleChange(e: ChangeEvent): void;
}

const Checkbox = ({ id, name, label, error, value, handleChange }: Props) => {
  return (
    <div className="check-field">
      <input type="checkbox" id={id} name={name} checked={value} onChange={handleChange} />
      <div className="check-field__label">
        <label htmlFor={id} className="check-field__title">
          <span className="check"></span>
          <span className="check-field__content">
            {label}
          </span>
        </label>
        {error && <span className="error-field">{error}</span>}
      </div>
    </div>
  );
};

export default Checkbox;