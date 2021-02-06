import React from 'react';
import CustomInputProps from '../../types/inputs';
import './index.scss';

interface Props {
  id: string;
  title: string;
  error: string;
  children: any;
  columns: 2 | 4;
}

const Select = ({ id, title, error, children, columns }: Props) => {
  const columnsOption = {
    '2': 'two',
    '4': 'four',
  };

  return (
    <div className="select-field">
      <span className="select-field__title">{title}</span>

      <div
        className={`select ${error && 'error'} ${
          columnsOption[columns]
        }-columns`}
        id={id}
      >
        {children}
      </div>
      <span className="error-field">{error}</span>
    </div>
  );
};

interface OptionProps extends CustomInputProps {
  children?: any;
}

Select.Option = ({ id, name, label, children, handleChange }: OptionProps) => (
  <>
    <input
      type="radio"
      name={name}
      id={id}
      value={id}
      onChange={handleChange}
    />
    <label htmlFor={id} className="option__legend">
      {children}
      <span>{label}</span>
    </label>
  </>
);

export default Select;
