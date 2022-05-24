import { useState } from 'react';
import {
  Dcontainer,
  Container,
  Wrapper,
  TitleContainer,
  Title,
  InfoContainer,
  InfoTitle,
  InfoWrapper,
} from './Dashboard.styled';
import ListCard from './List';
import data from './tData.json';
import sessionD from './tSession.json';

export default function Dashboard() {
  const [caseInfo, setCase] = useState({
    id: '',
    name: '',
    partyone: '',
    partytwo: '',
    mediator: '',
    caseClosed: '',
    token: '',
    date: '',
    sessionnumber: '',
    sessionstarted: '',
  });

  const [session, setSession] = useState({
    id: '',
    sessionid: '',
    name: '',
    partyone: '',
    partytwo: '',
    mediator: '',
    firstPartyMemebers: '',
    secondPartyMembers: '',
    sessionClosed: '',
    sessionStarted: '',
    sessionCreated: '',
    date: '',
  });
  const [name, setName] = useState('');

  const cards = data.map((card) => {
    const handleClick = () => {
      setCase({
        id: card.id,
        name: card.name,
        partyone: card.partyone,
        partytwo: card.partytwo,
        mediator: card.mediator,
        caseClosed: card.caseClosed,
        token: card.token,
        date: card.date,
        sessionnumber: card.sessionnumber,
        sessionstarted: card.sessionstarted,
      });
      setName('Case');
    };
    return (
      <ListCard
        key={card.id}
        name={card.name}
        date={card.date}
        onClick={handleClick}
      />
    );
  });

  const sessions = sessionD.map((card) => {
    const handleClick = () => {
      setSession({
        id: card.id,
        sessionid: card.sessionid,
        name: card.name,
        partyone: card.partyone,
        partytwo: card.partytwo,
        mediaotr: card.mediator,
        firstPartyMembers: card.firstPartyMembers,
        secondPartyMembers: card.secondPartyMembers,
        sessionClosed: card.sessionClosed,
        sessionStarted: card.sessionStarted,
        sessionCreated: card.sessionCreated,
      });
      setName('Session');
    };
    return (
      <ListCard
        key={card.id}
        name={card.name}
        date={card.date}
        onClick={handleClick}
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
        <Wrapper>
          <InfoContainer>
            <TitleContainer>
              <Title>Case Details</Title>
            </TitleContainer>
            <InfoWrapper>
              <InfoTitle>name: {caseInfo.name}</InfoTitle>
              <InfoTitle>Party one: {caseInfo.partyone}</InfoTitle>
              <InfoTitle>Party two: {caseInfo.partytwo}</InfoTitle>
              <InfoTitle>Mediator: {caseInfo.mediator}</InfoTitle>
              <InfoTitle>Case Closed: {caseInfo.caseClosed}</InfoTitle>
              <InfoTitle>Toke Uri: {caseInfo.token}</InfoTitle>
              <InfoTitle>Date: {caseInfo.date}</InfoTitle>
              <InfoTitle>Session Number: {caseInfo.sessionnumber}</InfoTitle>
              <InfoTitle>Session Started: {caseInfo.sessionstarted}</InfoTitle>
            </InfoWrapper>
          </InfoContainer>
          <InfoContainer>
            <TitleContainer>
              <Title>Session Details</Title>
            </TitleContainer>
            <InfoWrapper>
              <InfoTitle>id: {session.sessionid}</InfoTitle>
              <InfoTitle>Party one: {session.partyone}</InfoTitle>
              <InfoTitle>Party two: {session.partytwo}</InfoTitle>
              <InfoTitle>Mediator: {session.mediator}</InfoTitle>
              <InfoTitle>
                First Party Members: {session.firstPartyMembers}
              </InfoTitle>
              <InfoTitle>
                Second Party Members: {session.secondPartyMembers}
              </InfoTitle>
              <InfoTitle>Session Closed: {session.sessionClosed}</InfoTitle>
              <InfoTitle>Session Started: {session.sessionStarted}</InfoTitle>
              <InfoTitle>Session Created: {session.sessionCreated}</InfoTitle>
            </InfoWrapper>
          </InfoContainer>
        </Wrapper>
      </Container>
    </>
  );
}

// const handleClick = () => {
//   setCase({
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
