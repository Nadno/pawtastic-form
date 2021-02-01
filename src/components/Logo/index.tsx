import React from 'react';
import logoImage from '../../assets/images/logo.png';

import './index.scss';

const Logo = () => (
  <div className="logo">
    <a href="/">
      <img src={logoImage} alt="Pawtastic logo" />
      <h2>PAWTASTIC</h2>
    </a>
  </div>
);

export default Logo;