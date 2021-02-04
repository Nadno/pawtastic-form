import React, { ReactNode } from 'react';
import './index.scss';

interface Props {
  title: string | ReactNode;
  children?: any;
  [propName: string]: any;
}

const Fieldset = ({ id, title, children, ...props }: Props) => {
  return (
    <fieldset className="step" id={id} {...props}>
      <legend className="step__title">{title}</legend>
      {children}
    </fieldset>
  );
};

export default Fieldset;