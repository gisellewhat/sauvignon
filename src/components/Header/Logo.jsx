import React from 'react';
import s from './header-logo.module.scss';

const Logo = ({ logo }) => {
  return (
    <div className={s.logo}>
      <a href="/">{logo}</a>
    </div>
  );
};
export default Logo;
