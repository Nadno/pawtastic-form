import React, { FieldsetHTMLAttributes, ReactNode } from 'react';

import './index.scss';

interface Props extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  label: string | ReactNode;
}

const Fieldset: React.FC<Props> = ({ label, children, ...props }) => (
  <fieldset className="step" {...props}>
    <legend className="step__title">{label}</legend>
    {children}
  </fieldset>
);

export default Fieldset;
