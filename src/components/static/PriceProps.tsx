import React from "react";
import styled from "styled-components";
import welder from "../../assets/welder.jpg";
import {AiFillStar} from "react-icons/ai"
import { iPrice } from "../../utils/interface";



const PriceProps:React.FC <iPrice>= ({price, text, name,img}) => {
  return (
    <div>
      <Container>
        <ImageHolder>
          <Image src={img} />
        </ImageHolder>
        <TextHolder>
          <Text>{text}</Text>
          <Name>{name}</Name>
        </TextHolder>
        <Price>{price}<IconHolder><Icon /><Icon1 /> <Icon2 /> <Icon3 /><Icon4 /></IconHolder></Price>
      </Container>
    </div>
  );
};

export default PriceProps;

const IconHolder = styled.div`
gap: 5px;
display: flex;
justify-content: center;
align-items: center;
`
const Icon4 = styled(AiFillStar)`
color: darkorange;
`
const Icon3 = styled(AiFillStar)`
color: darkorange;
`
const Icon2 = styled(AiFillStar)`
color: darkorange;
`
const Icon1 = styled(AiFillStar)`
color: darkorange;
`
const Icon = styled(AiFillStar)`
color: darkorange;
`
const Price = styled.div`
font-weight: bold;
font-size: 20px;
margin-top: 20px;
line-height: 1.2;
color: #8a8282;
/* background-color: beige; */
display: flex;
justify-content: space-between;
align-items: center;
`;

const Name = styled.div`
text-transform: capitalize;
font-weight: bold;
font-size: 13px;
margin-top: 10px;
line-height: 1.2;
color: #8a8282;
`;

const Text = styled.div`
text-transform: capitalize;
font-weight: 700;
font-size: 18px;
line-height: 1.2;
margin-top: 20px;
`;

const TextHolder = styled.div`
display: flex;
flex-direction: column;
height: 100px;
width: 100%;
/* background-color: blue; */
border-bottom: 1px solid silver;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 5px 5px 0 0;
  transition: all 400ms;
  overflow: hidden;

  :hover{
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const ImageHolder = styled.div`
  width: 100%;
  height: 55%;
`;
const Container = styled.div`
  width: 300px;
  padding: 10px 10px;
  margin: 10px 10px;
  height: 350px;
  border-radius: 5px;
  overflow: hidden;
  background-color: #d8d3d3;
`;
