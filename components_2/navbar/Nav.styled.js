import styled from 'styled-components';
// import { Link as LinkS } from 'react-scroll';
import Link from 'next/link';
export const Nav = styled.nav`
  width: 100%;
  height: 9em;
  display: flex;
  align-items: center;
  background-color: black;
  background: radial-gradient(transparent, black), gray;
  position: sticky;
  z-index: 10;
  top: 0;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    zoom: 2;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 90em;
  align-items: center;
  margin: 0 auto;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    width: 100%;

    gap: 130px;
  }
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
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: none;
  }
`;

export const NavMenu2 = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: 0 auto;
  padding-right: 40px;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: fixed;
    z-index: 1000;
    inset: 0 0 30%;

    flex-direction: column;
    gap: 2em;

    font-size: x-large;
    padding: 30vh 2em;
    inset: 0 0 0 60%;
    background-color: #45bc8f;
    background: hsl(0 0% 100% / 0.1);
    backdrop-filter: blur(1rem);
    height: 100%;
    transition: 1s;
    transform: translateX(10%);
  }
`;

export const NavItem = styled.li`
  padding: 10px;
  /* &:hover {
    background: #45bc8f;
    color: white;
    transition: 0.3s ease-out;
  } */
`;

export const NavLinks = styled.div`
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

export const Button1 = styled.button`
  background: transparent;
  border-radius: 999px;
  box-sizing: border-box;
  border: solid;
  border-width: 1px;
  border-color: #45bc8f;
  color: #45bc8f;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 1px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 8px 56px;
  width: fit-content;
  word-break: break-word;

  margin: 0.25em;

  &:hover {
    background: #45bc8f;
    color: white;
    transition: 0.3s ease-out;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    -ms-word-break: keep-all;
    word-wrap: none;
    word-break: keep-all;
    margin-right: 90px;
  }
`;

export const Button2 = styled.button`
  background: white;
  display: none;

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: flex;
    margin-left: -188px;
    margin-top: 15px;
    position: absolute;
    z-index: 9999;
    top: 2rem;
    right: 2rem;
    background: none;
    color: white;
    border: none;
  }
`;

export const Button3 = styled.button`
  background: white;
  display: none;

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: none;
    margin-left: -188px;
    position: absolute;
    z-index: 9999;
    top: 2rem;
    right: 2rem;
  }
`;
