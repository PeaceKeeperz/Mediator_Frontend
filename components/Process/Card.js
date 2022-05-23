import {
  CardContainer,
  ImageContainer,
  ParagraphContainer,
  Title,
  Text,
} from './Card.styled';
/*import img1 from '../../images/crd1.png';*/
import bg from '../../images/card-bg.png';
import Image from 'next/image';

export default function Card(props) {
  return (
    <CardContainer >
      <ImageContainer>
        <Image src={props.img} width={98} height={28} />
      </ImageContainer>

      <ParagraphContainer>
        <Title>{props.title}</Title>

        <Text>
          If you’re part of a Dao or company, you could register through your
          employee’s account. If you’re a person, you can do it individually.
          Here you’ll have to provide us with your data and your employees or
          contributors if applicable, such as: name, physical address, ETH
          address, phone number, etc.
        </Text>
      </ParagraphContainer>
    </CardContainer>
  );

  /*return (
    <CardContainer>
        <ImageContainer>
            <Image src={img1}
            width="98px"
            height="28px"/>

        </ImageContainer>

        <ParagraphContainer>
            <Title>
            Register to Peace Keepers.

            </Title>

            <Text>
               If you’re part of a Dao or company, you could register through your employee’s account. 
               If you’re a person, you can do it individually.  
               Here you’ll have to provide us with your data and your employees or contributors if applicable, such as: name, physical address, ETH address, phone number, etc. 


            </Text>

        </ParagraphContainer>


    </CardContainer>
  )  
  */
}
