import React from 'react';
import s from './footer-email.module.scss';

const Email = () => {
  return (
    <section className={s.section}>
      Get in touch with me
      <a className={s.email} href="mailto:giselle.que@gmail.com">
        <h2>giselle.que@gmail.com</h2>
      </a>
    </section>
  );
};
export default Email;
