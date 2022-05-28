import {
  ProcessContainer,
  ImageContainer,
  Title,
  ThreeCardsContainer,
  TwoCardsContainer,
} from './Process.styled';
import Card from './Card';
import data from './data.json';
import Image from 'next/image';
import line from '../../images/loading-line.png';

export default function Process() {
  const cards = data.map((card) => {
    return <Card key={card.id} title={card.title} img={card.image} text={card.text} />;
  });
  return (
    <ProcessContainer name='process'>
      <ImageContainer>
        <Image src={line} alt='img' />
      </ImageContainer>
      <Title>Our mediation process</Title>
      <ThreeCardsContainer>{cards.splice(0, 3)}</ThreeCardsContainer>
      <TwoCardsContainer>{cards.splice(0, 3)}</TwoCardsContainer>
    </ProcessContainer>
  );
}
