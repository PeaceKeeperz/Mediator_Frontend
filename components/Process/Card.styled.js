import styled from 'styled-components';
import bg from '../../images/card-bg.png';

export const CardContainer = styled.div`
  height: 388px;
  width: 380px;
  background-image: url(${bg.src});
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  padding-left: 39px;
  padding-top: 12px;
`;

export const ParagraphContainer = styled.div`
  padding-left: 31px;
  padding-right: 12px;
`;

export const Title = styled.h2`
  width: 281px;
  height: 20px;

  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 20px;
`;

export const Text = styled.p`
  height: 228px;
  width: 340px;

  padding-top: 25px;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  /* or 145% */

  color: #959380;
`;
