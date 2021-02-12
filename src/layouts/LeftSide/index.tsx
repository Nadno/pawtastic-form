import React, { useEffect, useState } from 'react';

import { useStep } from '../../contexts/useStep';

import './index.scss';

const LeftSide: React.FC = ({ children }) => {
  const { step } = useStep(0, 6);
  const [img, setImg] = useState('');

  useEffect(() => {
    import(`../../assets/images/sign-up__${step}.jpg`).then((imgModule) => {
      setImg(`url(${imgModule.default})`);
    });
  }, [step]);

  return (
    <div className="side" style={{ backgroundImage: img }} tabIndex={0}>
      {children}
    </div>
  );
};

export default LeftSide;
