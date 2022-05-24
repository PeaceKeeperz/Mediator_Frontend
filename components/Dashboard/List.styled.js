import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  width: 100%;

  &:hover {
    border-bottom: 2px white solid;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`

export const Info = styled.h3`
  font-size: 1rem;
  color: white;
`;

export const Date = styled.h3`
  font-size: 1rem;
  color: black;
`;
