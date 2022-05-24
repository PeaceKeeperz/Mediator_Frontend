import { useState } from 'react';
import {
  Dcontainer,
  Container,
  Wrapper,
  TitleContainer,
  Title,
  InfoContainer,
  InfoTitle,
} from './Dashboard.styled';
import ListCard from './List';
import data from './tData.json';
import sessionD from './tSession.json';

export default function Dashboard() {
  const [caseInfo, setCaseInfo] = useState("");
  const cards = data.map((card) => {
    return (
      <ListCard
        handleClick={(caseInfo) => setCaseInfo(caseInfo)}
        key={card.id}
        name={card.name}
        date={card.date}
        // partyOne={card.partyone}
        // partyTwo={card.partytwo}
        // mediator={card.mediator}
        // caseClosed={card.caseClosed}
        // token={card.token}
        // sessionNumber={card.sessionnumber}
        // sessionStarted= {card.sessionstarted}
      />
    );
  });
  const sessions = sessionD.map((card) => {
    return (
      <ListCard
        handleClick={(caseInfo) => setCaseInfo(caseInfo)}
        key={card.id}
        name={card.name}
        date={card.date}
      />
    );
  });

  return (
    <>
      <Container>
        <Wrapper>
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
        </Wrapper>
        <InfoContainer>
          <TitleContainer>
            <Title>Open Info</Title>
            <InfoTitle>name: {caseInfo}</InfoTitle>
            <InfoTitle>Party one: {caseInfo.partyOne}</InfoTitle>
            <InfoTitle>Party two: {caseInfo.partyTwo}</InfoTitle>
            <InfoTitle>Mediator: {caseInfo.mediator}</InfoTitle>
            <InfoTitle>Case Closed: {caseInfo.caseClosed}</InfoTitle>
            <InfoTitle>Toke Uri: {caseInfo.token}</InfoTitle>
            <InfoTitle>Date: {caseInfo.date}</InfoTitle>
            <InfoTitle>Session Number: {caseInfo.sessionNumber}</InfoTitle>
            <InfoTitle>Session Started: {caseInfo.sessionStarted}</InfoTitle>
          </TitleContainer>
        </InfoContainer>
      </Container>
    </>
  );
}


    // const handleClick = () => {
    //   setCaseInfo({
    //     id: card.id,
    //     name: card.name,
    //     partyOne: card.partyone,
    //     partyTwo: card.partytwo,
    //     mediator: card.mediator,
    //     caseClosed: card.caseClosed,
    //     token: card.token,
    //     date: card.date,
    //     sessionNumber: card.sessionnumber,
    //     sessionStarted: card.sessionstarted,
    //   });
    // }

        //     key={card.id}
        // name={card.name}
        // date={card.date}
        // partyOne={card.partyone}
        // partyTwo={card.partytwo}
        // mediator={card.mediator}
        // caseClosed={card.caseClosed}
        // token={card.token}
        // sessionNumber={card.sessionnumber}
        // sessionStarted= {card.sessionstarted}