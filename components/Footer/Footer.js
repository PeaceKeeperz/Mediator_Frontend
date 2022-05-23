import {
  CopywriteContainer,
  FooterContainer,
  FooterWrapper,
  LinkWrapper,
  FooterLinks,
} from './Footer.styled';
import { FaDiscord, FaTwitter, FaGithub } from 'react-icons/fa';
import { RiCopyrightLine } from 'react-icons/ri';
function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <CopywriteContainer>
          PeaceKeepers <RiCopyrightLine /> 2022
        </CopywriteContainer>
        <LinkWrapper>
          <FooterLinks>
            <FaDiscord />
          </FooterLinks>
          <FooterLinks>
            <FaTwitter />
          </FooterLinks>
          <FooterLinks>
            <FaGithub />
          </FooterLinks>
        </LinkWrapper>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
