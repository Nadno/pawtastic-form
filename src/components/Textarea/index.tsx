import React, { AllHTMLAttributes, ChangeEvent } from 'react';
import './index.scss';

interface Props extends AllHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  handleChange(e: ChangeEvent): void;
}

const Textarea: React.FC<Props> = ({ id, label, handleChange, ...props }) => {
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
