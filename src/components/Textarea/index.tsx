import React from 'react';
import CustomInputProps from '../../types/inputs'
;
import './index.scss';

interface Props extends CustomInputProps {
  maxLength: number;
}

const Textarea = ({ id, label, handleChange, ...props }: Props) => {
  return (
    <div className="text-field">
      <label htmlFor={id} className="text-field__title">
        {label}
      </label>
      <textarea onChange={handleChange} {...props}></textarea>
    </div>
  );
};

export default Textarea;
