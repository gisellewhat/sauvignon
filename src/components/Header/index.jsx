import React, { useState, useRef, createRef, useEffect } from 'react';
// import PropTypes from 'prop-types';
import gsap from 'gsap';
import Logo from './Logo';
import Navbar from './Navbar';
import Burger from './Burger';
import { useMediaQuery } from '../../hooks';
import s from './header.module.scss';

const Header = ({ items, logo, navPosition }) => {
  // Setup state to determine if menu is open or not
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width: 989px)');

  //Setup the Nav ref
  const navRef = useRef();

  // Loop through the items and create a state of navItems with refs
  //to use for our animation
  const [navItems] = useState(
    items.map((item) => {
      return {
        ...item,
        ref: createRef(),
      };
    })
  );

  //Setup a timeline to use
  const [menuTL] = useState(
    // gsap.timeline({
    //   paused: true,
    //   defaults: { duration: 1, ease: 'expo.out' },
    // })
  );

  // Setup menuTL things and account for window resize events
  useEffect(() => {
    // Create an array with just the ref of the nav items
    const itemsRefs = navItems.map((item) => item.ref.current);

    // menuTL
    //   .fromTo(navRef.current, { opacity: 0 }, { opacity: 1 })
    //   .fromTo(
    //     itemsRefs,
    //     { autoAlpha: 0, y: 48 },
    //     { autoAlpha: 1, y: 0, stagger: 0.1 },
    //     '-=0.4'
    //   )
    //   .reverse();
      // eslint-disable-next-line
  }, [isSmallScreen]);

  // Run menuTL base on Menu State
  useEffect(() => {
    // menuTL.reversed(!isMenuOpen);
    // eslint-disable-next-line
  }, [isMenuOpen]);

  // onClick function to set state of menu
  const toggleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className={s.header}>
      <div className={s.header__wrapper}>
        <Logo logo={logo} />
        <Navbar items={items} isMenuOpen={isMenuOpen} ref={navRef} />
        <Burger toggleNav={toggleNav} isMenuOpen={isMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
