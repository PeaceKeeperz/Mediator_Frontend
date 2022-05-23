import styled from 'styled-components';




export const AboutContainer = styled.div`
display: flex;
flex-direction: column;
height: 884px;
margin-top: 10px;
padding: 20px;
margin-left:-30px;
@media screen and (min-width: 280px) and (max-width: 1080px){
 
    width: 400%;
    
   
    zoom: 2;
    
  }
`;


export const InlineContainer = styled.div`
display: flex;
@media screen and (min-width: 280px) and (max-width: 1080px){
    display: grid;
    
    
  }
`;

export const ParagraphContainer = styled.div`
display: flex;
flex-direction: column;
font-weight: 400;
font-size: 23px;

`;

export const Text = styled.p`

width: 569px;
height: 371px;

text-indent: 50px;

font-style: normal;
font-weight: 400;
font-size: 23px;
line-height: 35px;
/* or 151% */
letter-spacing: -0.015em;
color: #959380;
margin-left:20px ;
`;

export const Title = styled.h1`
margin-left: 60px;

`;


export const ImageContainer = styled.div`
  margin-left: 68px;
  @media screen and (min-width: 280px) and (max-width: 1080px){
    display: none;
    
  }
`;

export const Image2 = styled.img`
border: solid;


`;

export const List = styled.ul`
display: flex;
flex-direction: column;
margin-top: -290px;
gap: 40px;
color: #959380 ;


`;

export const Text2 = styled.p`
padding-left: 45px;
white-space: pre-line;
font-weight: 400;
font-size: 23px;

`;