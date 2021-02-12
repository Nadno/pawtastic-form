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

const Select: React.FC<Props> = ({ id, title, error, children, columns }) => {
  const columnsOption = {
    '2': 'two',
    '4': 'four',
  };

  return (
    <div className="select-field">
      <span className="select-field__title">{title}</span>

      <div
        className={`select ${error ? 'error' : ''} ${
          columnsOption[columns]
        }-columns`}
        id={id}
      >
        {children}
      </div>
      <span className="error-field" role="alert">{error}</span>
    </div>
  );
};

export const Option: React.FC<CustomInputProps> = ({
  id,
  name,
  label,
  children,
  handleChange,
  ...props
}) => (
  <div className="select__option">
    <input
      type="radio"
      name={name}
      id={id}
      value={id}
      onChange={handleChange}
      {...props}
    />
    <label htmlFor={id} className="option__legend">
      {children}
      <span>{label}</span>
    </label>
  </div>
);

export default Select;
