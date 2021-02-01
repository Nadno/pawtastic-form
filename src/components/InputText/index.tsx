import React, { ChangeEvent } from 'react';
import './index.scss';

interface Props {
  id: string;
  name: string;
  label: string;
  handleInput(e: ChangeEvent): void;
  [propName: string]: any;
}

const InputText = ({ id, name, label, handleInput, ...props }: Props) => {
  return (
    <div className="input-text">
      <label htmlFor={id} className="input-title">
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={name}        
        onChange={handleInput}
        {...props}
      />
      <span className="input__error"></span>
    </div>
  );
};

export default InputText;
