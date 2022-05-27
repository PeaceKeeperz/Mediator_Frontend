import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* border: white solid 2px; */
  padding-top: 1em;
  padding-bottom: 1em;
  margin: auto;

`;

export const ContainerWrapper = styled.div`
  height: 850px;
  margin: auto;
  overflow: auto;
`;

export const Functions = styled.div`
  border: white green 2px;
  padding: 1em;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Label = styled.label`
  font-size: 1em;
  color: white;
`;

export const Fname = styled.h1`
  font-size: 1.25em;
  color: white;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;