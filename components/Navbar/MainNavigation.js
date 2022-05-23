import Link from 'next/link';
import { animateScroll as scroll } from 'react-scroll';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import {
  Nav,
  NavbarContainer,
  Button1,
  Button2,
  Button3,
  NavMenu,
  NavMenu2,
  NavItem,
  NavLinks,
  NavLogo,
  NavHome
} from './MainNavigation.styled';

function MainNavigation() {
  const [scrollNav, setScrollNav] = useState(false);
  const [navExpanded, setNavExpanded] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 192) {
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
  useEffect(() => {
    toggleHome();
  }, [navExpanded]);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo>PeaceKeepers</NavLogo>
          {navExpanded ? (
            <NavMenu>
              <NavItem>
                <NavHome onClick={toggleHome}>Home</NavHome>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-192}>
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="when"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-192}>
                  When to Use a Mediator
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="process"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-192}>
                  Mediation Process
                </NavLinks>
              </NavItem>
            </NavMenu>
          ) : (
            <NavMenu2>
              <NavItem>
                <NavHome
                  onClick={() => {
                    setNavExpanded(!navExpanded);
                    toggleHome;
                  }}>
                  Home
                </NavHome>
              </NavItem>
              <NavItem>
                <NavLinks
                  onClick={() => setNavExpanded(!navExpanded)}
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-192}>
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  onClick={() => setNavExpanded(!navExpanded)}
                  to="when"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-192}>
                  When to Use a Mediator
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  onClick={() => setNavExpanded(!navExpanded)}
                  to="process"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-192}>
                  Mediation Process
                </NavLinks>
              </NavItem>
            </NavMenu2>
          )}
          <Link href='/Mediation_app'>
            <Button1>Launch App</Button1>
          </Link>
          <Button2 onClick={() => setNavExpanded(!navExpanded)}>
            {' '}
            <FiMenu size={40} />{' '}
          </Button2>
          <Button3 onClick={() => setNavExpanded(!navExpanded)}>
            {' '}
            <AiOutlineClose size={40} />{' '}
          </Button3>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default MainNavigation;
