import React from "react";
import styled from "styled-components";
import ButtonProps from "../global/ButtonProps";
import heroImg from "../assets/istockphoto-1432993831-612x612.jpg";

const Hero = () => {
  return (
    <div>
      <Container>
        <Main>
          <Top>
            <Text>
              <span>Learn!</span> <br />
              the skills you need to succeed in <br /> any career.
            </Text>
            <ButtonHolder>
              <Word>we have over hundred of skills. </Word>
              <ButtonProps
                height="45px"
                width="100px"
                bg="#47CF73"
                color="white"
                title="View all"
              />
            </ButtonHolder>
          </Top>
          <Image src={heroImg} />
        </Main>
      </Container>
    </div>
  );
};

export default Hero;

const Image = styled.img`
  @media screen and (min-width: 768px) {
    /* margin-top: 20px; */
    /* width: 600px;
    height: 00px; */
    object-fit: cover;
    margin-top: 60px;
  }
`;
const Word = styled.div`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const ButtonHolder = styled.div`
  margin-top: 30px;
`;

const Text = styled.div`
  font-size: 45px;
  font-weight: 700;
  line-height: 1.1;

  span {
    color: #24ac4f;
  }
`;

const Top = styled.div`
  margin-top: 50px;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    /* background-color: red; */
    width: 450px;
  }
`;

const Main = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  flex-direction: column;
  /* background-color: blue; */
  @media screen and (min-width: 768px) {
    width: 90%;
    flex-direction: row;
    /* justify-content: center; */
    /* background-color: red; */
    /* align-items: center; */
    /* flex-direction: column; */
  }
`;
const Container = styled.div`
  min-height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;

 
`;
