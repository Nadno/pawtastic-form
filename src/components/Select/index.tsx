import React, { FormEvent } from 'react';
import './index.scss';

interface Props {
  id: string;
  title: string;
  error: string;
  children: any;
  columns: 2 | 4;
}

const Select = ({ id, title, error, children, columns }: Props) => {
  const columnsOp = new Map();
  columnsOp.set(2, 'two');
  columnsOp.set(4, 'four');

  return (
    <div className="select-field" >
      <span className="select-field__title">{title}</span>

      <div className={
        `select ${error && 'error'} ${columnsOp.get(columns)}-columns`
        }
        id={id}
      >
        {children}
      </div>
      <span className="error-field">{error}</span>
    </div>
  );
};

interface OptionProps {
  id?: string;
  name: string;
  label: string;
  children?: any;
  handleChange(e: FormEvent): void;
}

Select.Option = ({ id, name, label, children, handleChange }: OptionProps) => {
  return (
    <>
      <input type="radio" name={name} id={id} value={id} onChange={handleChange} />
      <label htmlFor={id} className="option__legend">
        {children}
        <span>{label}</span>
      </label>
    </>
  );
};

export default Select;
