import React from 'react';
import { CardContainer, Info, Date, Wrapper } from './list.styled';

export default function ListCard(props) {

  return (
    <CardContainer onClick={() => props.handleClick(props.name)}>
      <Info>{props.name}</Info>
      <Wrapper>
        <Date>{props.date}</Date>
      </Wrapper>
    </CardContainer>
  );
}

// props.date,
//   props.partyOne,
//   props.partyTwo,
//   props.mediator,
//   props.caseClosed,
  // props.token;