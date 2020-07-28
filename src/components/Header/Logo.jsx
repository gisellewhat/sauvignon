import React from 'react';
import s from './header-logo.module.scss';

const Logo = ({ logo }) => {
  return (
    <a href="/">
      <div className={s.logo}>{logo}</div>
    </a>
  );
};
export default Logo;
