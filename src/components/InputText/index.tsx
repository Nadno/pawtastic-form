import React, { ChangeEvent } from 'react';
import './index.scss';

interface Props {
  id: string;
  name: string;
  label: string;
  handleChange(e: ChangeEvent): void;
  [propName: string]: any;
}

const InputText = ({ id, name, label, handleChange, ...props }: Props) => {
  return (
    <div className="input-text">
      <label htmlFor={id} className="input-title">
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={name}        
        onChange={handleChange}
        {...props}
      />
      <span className="input__error"></span>
    </div>
  );
};

export default InputText;
