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
import Image from 'next/image';
import bg from '../../images/hero.png';
function Hero() {
  return (
    <HeroContainer>
      <BackgroundContainer>
        <Image
          src={bg}
          alt='background picture'
          layout='responsive'
          quality={100}
        />
      </BackgroundContainer>
      <ContentContainer>
        <GridContainer>
          <ContentWrapper>
            <Title>A Blockchain mediation system for DAOs</Title>
            <Paragraph>
              The world's first web3 mediation system, where you get to talk to
              the counterpart, with a 3rd person who will guide you to a solution.
                      </Paragraph>
                      <Button> Launch App</Button>
          </ContentWrapper>
        </GridContainer>
      </ContentContainer>
    </HeroContainer>
  );
}

export default Hero;
