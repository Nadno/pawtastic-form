import React from 'react';
import './index.scss';

interface Props {
  id: string;
  children: any;
  columns: 2 | 4;
}

const Select = ({ id, children, columns }: Props) => {
  const columnsOp = new Map();
  columnsOp.set(2, 'two');
  columnsOp.set(4, 'four');

  return (
    <div className={`select ${columnsOp.get(columns)}-columns`} id={id}>
      {children}
    </div>
  );
};

interface OptionProps {
  id: string;
  name: string;
  label: string;
  children: any;
}

Select.Option = ({ id, name, label, children }: OptionProps) => {
  return (
    <>
      <input type="radio" name={name} id={id} value="dog" />
      <label htmlFor={id} className="option__legend">
        {children}
        <span>{label}</span>
      </label>
    </>
  );
};

export default Select;
