import Link from 'next/link';
import { animateScroll as scroll } from 'react-scroll';
import { FiMenu} from 'react-icons/fi';
import { AiOutlineClose} from 'react-icons/ai';
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
} from './Nav.styled';
import {ConnectButton} from "web3uikit";

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
  useEffect(()=>{
toggleHome()

  },[navExpanded]);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <Link href='/'>
            <NavLogo>PeaceKeepers</NavLogo>
          </Link>
          <NavMenu>
            <Link href="/Mediation_app">
              <NavItem>
                <NavLinks>My Dashboard</NavLinks>
              </NavItem>
            </Link>
            <NavItem>
              <Link href='/Mediatiorz'>
                <NavLinks onClick={() => setNavExpanded(!navExpanded)}>
                  Mediator
                </NavLinks>
              </Link>
            </NavItem>
            <NavItem>
              <Link href='/Mediationz'>
                <NavLinks onClick={() => setNavExpanded(!navExpanded)}>
                  Mediation
                </NavLinks>
              </Link>
            </NavItem>
          </NavMenu>

          <ConnectButton />
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
