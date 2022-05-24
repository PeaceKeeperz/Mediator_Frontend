import React from 'react';
import { CardContainer, Info, Date, Wrapper } from './list.styled';

export default function ListCard(props, {setCaseInfo}) {
  const handleClick = () => {
    setCaseInfo(props.name);
  };

  return (
    <CardContainer onClick={handleClick}>
      <Info>{props.name}</Info>
      <Wrapper>
        <Date>{props.date}</Date>
      </Wrapper>
    </CardContainer>
  );
}
