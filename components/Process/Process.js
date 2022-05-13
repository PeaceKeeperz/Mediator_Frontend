import { ProcessContainer, ImageContainer, Title, ThreeCardsContainer, TwoCardsContainer } from "./Process.styled"
import Card from "./Card"
import data from "./data.json"
import Image from "next/image"
import line from "../../images/loading-line.png"


export default function Process() {
    
    const cards = data.map(card => {
        return(
        <Card
        title={card.title}
        img={card.image}
        text={card.text}
    
        
        
        /> )
    })
  return (
      <ProcessContainer>
          <ImageContainer>
              <Image src={line}/>

          </ImageContainer>
          <Title>
          Our mediation process

          </Title>
          <ThreeCardsContainer>
              {cards.splice(0,3)}
              
           </ThreeCardsContainer>
           <TwoCardsContainer>
                 
           {cards.splice(0,3)}
           
              
            </TwoCardsContainer>
              
          
          

          
      </ProcessContainer>
      
    
  )
}
