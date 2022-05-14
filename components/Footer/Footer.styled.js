import styled from 'styled-components';
import bg from '../../images/mosaic.png';
export const FooterContainer = styled.footer`
  background: #000;
  background-image: url(${bg.src});
  padding: 40px;
  text-align: center;
  width: 100%;
  border-top: 1px solid white;
  color: white;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 90em;
  display: flex;
  margin: 0 auto;
`;

export const CopywriteContainer = styled.div`
  display: flex;
  font-family: 'Macondo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  align-items: center;
  gap: 6px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const FooterLinks = styled.a`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 2.5rem;
`;
