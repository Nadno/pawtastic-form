import React from 'react';

import firstBg from '../../assets/images/sign-up__0.jpg';
import secondBg from '../../assets/images/sign-up__1.jpg';
import thirdBg from '../../assets/images/sign-up__2.jpg';
import fourthBg from '../../assets/images/sign-up__3.jpg';
import fifthBg from '../../assets/images/sign-up__4.jpg';
import sixthBg from '../../assets/images/sign-up__5.jpg';

import './index.scss';

interface Props {
  children: any;
  stepImage: number;
}

const LeftSide = ({ children, stepImage }: Props) => {
  const backgrounds = [firstBg, secondBg, thirdBg, fourthBg, fifthBg, sixthBg];
  const backgroundImage = `url(${backgrounds[stepImage]})`;
  
  return (
    <div className="side" style={{ backgroundImage, }}>
      {children}
    </div>
  )
};

export default LeftSide;