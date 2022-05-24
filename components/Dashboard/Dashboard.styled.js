import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Dcontainer = styled.div`
  height: 388px;
  width: 380px;
  background: grey;
  display: flex;
  flex-direction: column;
  margin: 1em;
  padding: 0em 2em 1em 2em;
  overflow: auto;
`;

export const TitleContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
export const Title = styled.h1`
  color: white;
  font-size: 2em;
`;

export const InfoContainer = styled.div`
  width: 380px;
  background: grey;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 1em;
  padding: 0em 2em 1em 2em;
`;

export const InfoDetails = styled.div`
  color: white;
  font-size: 1em;
  padding: 0 0.5em 0 0.5em;
  display: flex;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 1em;
`;
