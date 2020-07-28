import React from 'react';
import Email from './Email';
import Links from './Links';
import s from './footer.module.scss';

function Footer() {
  return (
    <footer className={s.footer}>
      <Email />
      <Links />
    </footer>
  );
}

export default Footer;
