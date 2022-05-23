import { WantContainer, ImageContainer, Title, InlineContainer, Text, Img  } from "./Want.styled";
import want from '../../images/want.png';
import Image from "next/image";
import line from "../../images/loading-line.png"


export default function Want() {
  return (
    <WantContainer>
      <ImageContainer>
             <Image src={line}/>
        </ImageContainer>
        
            <Title>
             Want to become a mediator?
             </Title>

        
        <InlineContainer>
            <Text>
                Mediators in our platform get picked randomly according to their abilities, experience, time zone and languages spoken. Having all this in mind we have 3 categories: Junior, Intermediate and Expert.
                 If you want to work with us, but have no or little experience, you can take our training:
                  We have an amazing Virtual Training for Mediators which is a live online training that teaches participants the necessary skills to resolve conflicts. In this 6-day course, participants learn how to mediate workplace conflict, and resolve their own conflict situations.
                   The Training is for any professional, regardless of role or level within an organization, who wants to be certified in advanced workplace mediation.
                  If you successfully complete the training, you’ll be awarded the Junior Mediator Certificate and NFT, also, you’ll be able to work at our platform.  

                  For the other categories we’ll conduct interviews and review experience and expertise, once you have successfully completed these steps you'll be rewarded with a badge and can work in our platform.  


            </Text>
            <Image src={want}
            width={648}
            height={522} />
            
           
            
        </InlineContainer>
    </WantContainer>
  )
}
