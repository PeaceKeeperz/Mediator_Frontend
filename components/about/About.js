import {AboutContainer, ImageContainer, InlineContainer, ParagraphContainer ,Title, Text, Text2, List}from './About.styled'
import imge from '../../images/left-img.png'
import line from '../../images/loading-line.png'
import line1 from '../../images/Line1.png'
import Image from 'next/image';
import Image2 from 'next/image';
export default function About() {
  return (
    <AboutContainer>
        <InlineContainer>
            <ImageContainer>
            <Image src={imge}
            width = "610px"
            height = "460px"
            />
            </ImageContainer>
            <ParagraphContainer>
                 <Image src={line}
                  width="80px"
                  height="8px"/>
                <Title>What is Mediation ?</Title>
                <Text>  Mediation is a process in which a  neutral  third party (Mediator) assists  two or more people in conflict to:                                                       
                </Text>
                <List>
                   <li>Identify their issues, needs and desired outcomes, </li>
                   <li> Raise and review potential options and solutions, </li>
                   <li>  Negotiate a mutually acceptable agreement.... </li>
               </List>

             
           </ParagraphContainer>
                
            
        </InlineContainer>
        <Image2 src={line}
                  
                  />
        <Text2>
               A safe environment 

               is needed in a mediation which usually takes about 5 hours or even multiple sessions and each person will be given the chance to have their say. Mediation is not about deciding who is right or wrong or making decisions based on what has happened in the past. It is about supporting & enabling each person equally to resolve their present issues and come to a mutually acceptable agreement.<br></br><br></br><br></br>
               Mediators must always set aside their own beliefs and focus on what is best for all clients involved, by also conducting themselves in a respectful and inclusive manner.

        </Text2>
        </AboutContainer>
  )
}
