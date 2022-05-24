import React from 'react';
import { CardContainer, Info, Date, Wrapper } from './list.styled';

export default function ListCard(props) {

  return (
    <CardContainer onClick={props.onClick}>
      <Info>{props.name}</Info>
      <Wrapper>
        <Date>{props.date}</Date>
      </Wrapper>
    </CardContainer>
  );
}