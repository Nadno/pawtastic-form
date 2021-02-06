import React, { useEffect, useState } from 'react';

import { useStep } from '../../contexts/useStep';

import './index.scss';
interface Props {
  children: any;
}

const LeftSide = ({ children }: Props) => {
  const { step } = useStep(0, 6);
  const [img, setImg] = useState('');

  useEffect(() => {
    import(`../../assets/images/sign-up__${step}.jpg`)
      .then(imgModule => {
        setImg(`url(${imgModule.default})`)
      });
  }, [step]);

  return (
    <div className="side" style={{ backgroundImage: img }}>
      {children}
    </div>
  );
};

export default LeftSide;
