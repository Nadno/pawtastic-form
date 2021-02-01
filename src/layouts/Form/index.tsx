import React from 'react';

import './index.scss';

interface Props {
  children: any;
}

const Form = ({ children }: Props) => {
  return (
    <main className="form">
      {children}
    </main>
  );
};

export default Form;