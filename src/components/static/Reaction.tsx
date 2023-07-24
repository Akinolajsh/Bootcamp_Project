import React from "react";
import styled from "styled-components";
import testify from "../../assets/testify.jpg"

export interface iTest{
image?:any;
name?:string;
text?:string;
}

const Reaction: React.FC <iTest>= ({image, name, text}) => {
  return (
    <div>
      <Container>
      
          <Image src={image}/>
        
        <Name>{name}</Name>
        <Text>
          {text}
        </Text>
      </Container>
    </div>
  );
};

export default Reaction;

const Text = styled.div`
font-size: 14px;
text-align: center;
`;
const Name = styled.div`
font-size: larger;
margin: 10px 0;
`;
const Image = styled.img`
border-radius: 50%;
width: 150px;
height: 150px;
`;

const Container = styled.div`
  width: 300px;
  height: 300px;
  margin: 20px 20px;
  padding: 5px 5px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(to top right, #40965b,#acc5b4);
  /* background-color: #dfd9d9; */
  margin-left: 10px;
`;
