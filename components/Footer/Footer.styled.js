import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: #000;
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

export const CopywriteContainer = styled.div``;


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