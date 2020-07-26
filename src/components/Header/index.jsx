import React from 'react';

import Wrapper from './Wrapper';
import A from './A';
import Navbar from './Navbar';
import HeaderLink from './HeaderLink';
import Logo from './Logo';

function Header(){
  return(
    <Wrapper>
      {/* <A href="/">
        <img src="" alt="Giselle Que - Logo" />
        Giselle Que
      </A> */}
      <Logo>Giselle Que</Logo>
      <Navbar>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/about">About</HeaderLink>
      </Navbar>
    </Wrapper>
  );
}

export default Header;