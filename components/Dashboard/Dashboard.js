import { useState } from 'react';
import {
  Dcontainer,
  Container,
  TitleContainer,
  Title,
  InfoContainer,
  InfoTitle,
} from './Dashboard.styled';
import ListCard from './List';
import data from './tData.json';
import sessionD from './tSession.json';

export default function Dashboard() {
  const [caseInfo, setCaseInfo] = useState('Title');
  const cards = data.map((card) => {
    return (
      <ListCard
        setCaseInfo={setCaseInfo}
        key={card.id}
        name={card.name}
        date={card.date}
      />
    );
  });
  const sessions = sessionD.map((card) => {
    return (
      <ListCard
        setCaseInfo={setCaseInfo}
        key={card.id}
        name={card.name}
        date={card.date}
      />
    );
  });

  return (
    <>
      <Container>
        <Dcontainer>
          <TitleContainer>
            <Title>Open Cases</Title>
          </TitleContainer>
          {cards}
        </Dcontainer>
        <Dcontainer>
          <TitleContainer>
            <Title>Open Sessions</Title>
          </TitleContainer>
          {sessions}
        </Dcontainer>
      </Container>
      <InfoContainer>
        <TitleContainer>
          <Title>Open Info</Title>
          <InfoTitle>name: {caseInfo}</InfoTitle>
        </TitleContainer>
      </InfoContainer>
    </>
  );
}
