import React, { FormEvent } from 'react';

import './index.scss';

interface Props {
  onSubmit(e: FormEvent): void;
  children: any;
}

const Form = ({ onSubmit, children }: Props) => {
  return (
    <form onSubmit={onSubmit} className="form">
      {children}
    </form>
  );
};

export default Form;