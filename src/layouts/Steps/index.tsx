import React from 'react';

import './index.scss';

interface Props {
  children: any;
}

const Steps = ({ children }: Props) => {
  return (
    <main className="steps">
      {children}
    </main>
  );
};

export default Steps;