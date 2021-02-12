import React from 'react';
import CustomInputProps from '../../types/inputs';

import './index.scss';

interface Props extends CustomInputProps {
  checkValue?: boolean;
}

const Checkbox: React.FC<Props> = ({
  id,
  label,
  error,
  checkValue,
  handleChange,
  ...props
}) => {
  return (
    <div className="check-field">
      <input
        type="checkbox"
        id={id}
        checked={checkValue}
        onChange={handleChange}
        {...props}
      />
      <div className="check-field__label">
        <label htmlFor={id} className="check-field__title">
          <span className="check"></span>
          <span className="check-field__content">{label}</span>
        </label>
        {error && <span className="error-field">{error}</span>}
      </div>
    </div>
  );
};

export default Checkbox;
