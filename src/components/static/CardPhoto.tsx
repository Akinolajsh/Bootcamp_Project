import React from "react";
import styled from "styled-components";
import { iCard } from "../../utils/interface";



const CardPhoto:React.FC<iCard> = ({image, title, text}) => {
  return (
    <div>
      <Container>
        <Main>
          <Image src={image} />
        </Main>
        <TextHolder>
          <Title>{title}</Title>
          <SubTitle>{text}
          </SubTitle>
        </TextHolder>
      </Container>
    </div>
  );
};

export default CardPhoto;

const SubTitle = styled.div``;

const Title = styled.div`
flex: 1;
margin-bottom: 10px;
font-size: 24px;
font-weight: 900;

:hover{
    color: #47CF73;
}
`;

const TextHolder = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 10px 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  flex: 1;
`;

const Main = styled.div`
  width: 100%;
  height: 70%;
  border-radius: 5px;
  object-fit: cover;
  transition: all 450 ms;

  :hover{
    transform: scale(1.01);
  }
`;
const Container = styled.div`
  height: 400%;
  width: 400px;
  margin: 20px 20px;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: #3b3636;
  cursor: pointer;
`;
