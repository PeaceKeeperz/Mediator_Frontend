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
`

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
  /* justify-content: center; */
  margin-left: auto;
  margin-right: auto;
`
export const Title = styled.h1`
  color: white;
  font-size: 2em;
`

export const InfoContainer = styled.div`
  width: 800px;
  background: grey;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 1em;
  padding: 0em 2em 1em 2em;
`;

export const InfoTitle = styled.h2`
  color: white;
  font-size: 1em;
  
`