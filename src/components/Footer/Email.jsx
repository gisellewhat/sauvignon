import React from 'react';
import s from './footer-email.module.scss';

const Email = () => {
  return (
    <section className={s.section}>
      <div className="overline">Let's get in touch</div>
      <h2 className={s.email__header}>
        <a className={s.email__link} href="mailto:giselle.que@gmail.com">
          giselle.que@gmail.com
        </a>
      </h2>
      <div className="container u-paddingT100">
        <div className={s.socials}>
          <div className={s.socials__link}>
            <a target="_blank" href="https://www.linkedin.com/in/giselle-que/">LinkedIn</a>
          </div>
          <div className={s.socials__link}>
            <a target="_blank" href="">Behance</a>
          </div>
          <div className={s.socials__link}>
            <a target="_blank" href="">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Email;
