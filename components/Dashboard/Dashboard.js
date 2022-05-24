import { useState } from 'react';
import {
  Dcontainer,
  Container,
  Wrapper,
  TitleContainer,
  Title,
  InfoContainer,
  InfoWrapper,
  InfoDetails,
} from './Dashboard.styled';
import ListCard from './List';
import caseData  from './tData.json';
import sessionData from './tSession.json';

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

  const cards = caseData.map((card) => {
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

  const sessions = sessionData.map((card) => {
    const handleClick = () => {
      setSession({
        id: card.id,
        sessionid: card.sessionid,
        name: card.name,
        partyone: card.partyone,
        partytwo: card.partytwo,
        mediator: card.mediator,
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
              <InfoDetails>name: {caseInfo.name}</InfoDetails>
              <InfoDetails>Party one: {caseInfo.partyone}</InfoDetails>
              <InfoDetails>Party two: {caseInfo.partytwo}</InfoDetails>
              <InfoDetails>Mediator: {caseInfo.mediator}</InfoDetails>
              <InfoDetails>Case Closed: {caseInfo.caseClosed}</InfoDetails>
              <InfoDetails>Toke Uri: {caseInfo.token}</InfoDetails>
              <InfoDetails>Date: {caseInfo.date}</InfoDetails>
              <InfoDetails>
                Session Number: {caseInfo.sessionnumber}
              </InfoDetails>
              <InfoDetails>
                Session Started: {caseInfo.sessionstarted}
              </InfoDetails>
            </InfoWrapper>
          </InfoContainer>
          <InfoContainer>
            <TitleContainer>
              <Title>Session Details</Title>
            </TitleContainer>
            <InfoWrapper>
              <InfoDetails>Case id: {session.sessionid}</InfoDetails>
              <InfoDetails>Party one: {session.partyone}</InfoDetails>
              <InfoDetails>Party two: {session.partytwo}</InfoDetails>
              <InfoDetails>Mediator: {session.mediator}</InfoDetails>
              <InfoDetails>
                First Party Members: {session.firstPartyMembers}
              </InfoDetails>
              <InfoDetails>
                Second Party Members: {session.secondPartyMembers}
              </InfoDetails>
              <InfoDetails>Session Closed: {session.sessionClosed}</InfoDetails>
              <InfoDetails>
                Session Started: {session.sessionStarted}
              </InfoDetails>
              <InfoDetails>
                Session Created: {session.sessionCreated}
              </InfoDetails>
            </InfoWrapper>
          </InfoContainer>
        </Wrapper>
      </Container>
    </>
  );
}
