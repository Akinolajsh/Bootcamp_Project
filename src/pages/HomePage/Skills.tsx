import React from "react";
import styled from "styled-components";
import ButtonProps from "../../global/ButtonProps";

const Skill = () => {
  return (
    <div>
      <Container>
        <Main>
            <Title>Latest Top Skills</Title>
            <Text>Create your free account now and get immediate access <br/>to 100s of courses.</Text>
            <ButtonProps
                height="45px"
                width="100px"
                bg="#47CF73"
                color="white"
                title="View all"
              />
        </Main>
      </Container>
    </div>
  );
};

export default Skill;


const Text = styled.div`
text-align: center;
color: #C2B89E;
margin-top: 10px;
margin-bottom: 30px;
`
const Title = styled.div`
font-size: 34px;
font-weight: 900;
color: white;
`
const Main = styled.div`
border: 10px solid #47CF73;
height: 400px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width: 700px;
border-radius: 0px 100px 0 0 ;
`;

const Container = styled.div`
width: 100%;
height: 500px;
display: flex;
justify-content: center;
align-items: center;
background-color: #33333D;
`;
