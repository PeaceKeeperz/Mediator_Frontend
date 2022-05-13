import { WhenContainer, ParagraphContainer, ImageContainer, Title, Text } from "./When.styled";
import Image from 'next/image';
import line from '../../images/loading-line.png'
import mediator from '../../images/mediator.png'



export default function When() {
  return (
    <WhenContainer>
        <ParagraphContainer>
            <Image src={line}/>
            <Title>
            When to use a mediator?
            </Title>

            <Text>
               Mediation happens outside of the courtroom and allows for people 
                to try to resolve their issues without standing in front of a judge.
                Using a mediator often completely replaces conventional court procedures.
                Sometimes the parties involved never even need to step into a courtroom.
                 Mediation can also be used to speed up legal resolutions, surpass the trial 
                 process and ultimately save people financially from heavy court and attorney fees.
               However, mediation may not be the best option if the parties will not agree on basic truths,
                if the conflict involves a crime, or if someone involved feels threatened.

            </Text>

        </ParagraphContainer>

        <ImageContainer>
         
         <Image src={mediator}/>

        </ImageContainer>
    </WhenContainer>
  )
}
