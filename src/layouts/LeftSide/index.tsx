import React from 'react';

import firstBg from '../../assets/images/sign-up__0.jpg';
import secondBg from '../../assets/images/sign-up__1.jpg';
import thirdBg from '../../assets/images/sign-up__2.jpg';
import fourthBg from '../../assets/images/sign-up__3.jpg';
import fifthBg from '../../assets/images/sign-up__4.jpg';
import sixthBg from '../../assets/images/sign-up__5.jpg';
import seventhBg from '../../assets/images/sign-up__5.jpg';

import { useStep } from '../../contexts/useStep';

import './index.scss';
interface Props {
  children: any;
}

const LeftSide = ({ children }: Props) => {
  const { step } = useStep(0, 6);
  const backgrounds = [firstBg, secondBg, thirdBg, fourthBg, fifthBg, sixthBg, seventhBg];
  const backgroundImage = `url(${backgrounds[step]})`;
  
  return (
    <div className="side" style={{ backgroundImage, }}>
      {children}
    </div>
  )
};

export default LeftSide;