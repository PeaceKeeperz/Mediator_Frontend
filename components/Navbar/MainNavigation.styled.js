import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  width: 100%;
  height: 12em;
  display: flex;
  align-items: center;
  background-color: black;
  background: radial-gradient(transparent, black), gray;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 90em;
  align-items: center;
  margin: 0 auto;
`;

export const NavLogo = styled.div`
  background: none;
  border: 2px solid #45bc8f;
  color: #45bc8f;
  line-height: 1;
  margin: 0.5em;
  padding: 0.3em 0.3em;
  font-size: 2.25em;
  &:hover {
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: 0 auto;
  padding-right: 40px;
`;

export const NavItem = styled.li`
  padding: 10px;
  /* &:hover {
    background: #45bc8f;
    color: white;
    transition: 0.3s ease-out;
  } */
`;

export const NavLinks = styled(LinkS)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  /* padding: 0 1rem; */
  padding: 10px;
  margin: 0 0.5em;
  height: 100%;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    background: #45bc8f;
    color: white;
    transition: 0.3s ease-out;
  }
`;

export const Button = styled.button`
  background: white;
  border-radius: 999px;
  box-sizing: border-box;
  color: black;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 8px 56px;
  width: fit-content;
  word-break: break-word;
  border: 0;
  margin: 0.25em;

  &:hover {
    background: #45bc8f;
    color: white;
    transition: 0.3s ease-out;
  }
`;
