import {
  HeroContainer,
  BackgroundContainer,
  ContentContainer,
  GridContainer,
  ContentWrapper,
  Title,
  Paragraph,
  Button,
} from '../HeroSection/Hero.styled';

import bg from '../../images/hero.png';
import Link from 'next/link';

function Hero() {
  return (
    <HeroContainer>
      <ContentContainer>
        <GridContainer>
          <ContentWrapper>
            <Title>A Blockchain mediation system for DAOs</Title>
            <Paragraph>
              The world's first web3 mediation system, where you get to talk to
              the counterpart, with a 3rd person who will guide you to a
              solution.
            </Paragraph>
            <Link href='/Mediation_app'>
              <Button>Launch App</Button>
            </Link>
          </ContentWrapper>
        </GridContainer>
      </ContentContainer>
    </HeroContainer>
  );
}

export default Hero;
