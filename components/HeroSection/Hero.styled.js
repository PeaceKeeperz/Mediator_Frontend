import styled from 'styled-components';

import bg from '../../images/hero.png';

export const HeroContainer = styled.div`

background-image: url(${bg.src});
background-size: cover;
background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  display: flex;
  width: 100%;
  height: 600px;
  position: relative;
  z-index: 1;
`;

export const BackgroundContainer = styled.div`
  height: 100%;
  width: 100%;
  
  
`;

export const ContentContainer = styled.div`
  z-index: 3;
  position: absolute;
  padding-left: 28px;
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  
`;

export const GridContainer = styled.div`
  /* display: grid;
  grid-auto-flow: dense;
  justify-items: center;
  grid-template-columns: 65%;
  grid-template-areas: 'col1'; */
  display: block;
  width: 50%;
  
`;

export const ContentWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: col1; */
`;

export const Title = styled.h1`
  font-size: 3em;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 84px;
  /* margin: 0.25em 0; */
`;

export const Paragraph = styled.p`
  letter-spacing: 0.05em;
  opacity: 0.8;
  font-size: 1.5em;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin-bottom: 60px;
`;

export const ButtonContainter = styled.div``;


export const Button = styled.button`
  background: #45bc8f;
  border-radius: 999px;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 8px 56px;
  width: fit-content;
  word-break: break-word;
  border: 0;
  margin: 0.25em;

  &:hover {
    background: white;
    color: black;
    transition: 0.3s ease-out;
  }
`;
