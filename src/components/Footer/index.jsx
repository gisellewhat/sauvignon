import React from 'react';
import Email from './Email';
import Links from './Links';
import s from './footer.module.scss';

function Footer() {
  return (
    <footer className={s.footer}>
      <div className="container__wrapper u-paddingT100 u-paddingB100">
        <Email />
        <Links />
      </div>
    </footer>
  );
}

export default Footer;
