import Link from 'next/link';
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
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>PEACEKEAPERS</NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>When to Use a Mediator</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Mediation Process</NavLinks>
            </NavItem>
          </NavMenu>
          <Button>Launch App</Button>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default MainNavigation;
