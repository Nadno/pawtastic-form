import React from 'react';
import './index.scss';

interface Props {
  children: any;
  [propName: string]: any;
}

const Button = ({ children, ...props }: Props) => {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
};

export default Button;