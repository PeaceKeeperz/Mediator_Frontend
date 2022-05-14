import Link from 'next/link';
import { animateScroll as scroll } from 'react-scroll';
import { useEffect, useState } from 'react';
import {
  Nav,
  NavbarContainer,
  Button,
  NavMenu,
  NavItem,
  NavLinks,
  NavLogo,
} from './MainNavigation.styled';

function MainNavigation() {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  /* Scrolls to the top of webpage */
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo>PeaceKeepers</NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks onClick={toggleHome}>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='when'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'>
                When to Use a Mediator
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='process'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'>
                Mediation Process
              </NavLinks>
            </NavItem>
          </NavMenu>
          <Button>Launch App</Button>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default MainNavigation;
