import styled from 'styled-components';

export const ImageContainer = styled.div`
  padding-left: 68px;
  margin-bottom: 56px;
`;

export const Title = styled.h1`
  padding-left: 68px;
  margin-bottom: 56px;
`;

export const ProcessContainer = styled.div`
@media screen and (min-width: 280px) and (max-width: 1080px){
    width: 400%;
    zoom: 2;
    overflow-x: hidden;
  }

`;

/*export const CardsContainer = styled.div`
     display: grid;
     

    grid-template-columns: repeat(3, 1fr);
    gap:59px;
    


`;*/

export const ThreeCardsContainer = styled.div`
  display: flex;
  gap: 59px;
  margin-left: 13px;
  @media screen and (min-width: 280px) and (max-width: 1080px){
    display: grid;
  }
`;
export const TwoCardsContainer = styled.div`
  display: flex;
  gap: 59px;
  margin-left: 230px;
  margin-top: 81px;

  @media screen and (min-width: 280px) and (max-width: 1080px){
    display: grid;
    margin-left: 13px;
  }

`;
