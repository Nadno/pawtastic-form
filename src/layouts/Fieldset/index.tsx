import React from 'react';
import './index.scss';

interface Props {
  id: string;
  title: string;
  children: any;
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