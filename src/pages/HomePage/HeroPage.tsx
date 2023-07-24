import React from "react";
import styled from "styled-components";
import homePage from "../../assets/hero.jpg"
import ButtonProps from "../../global/ButtonProps";
import { Link } from "react-router-dom"

const HeroPage = () => {
  return (
    <div>
      <Container>
        <Main>
<TextHolder>
   <Text>
              Learn the <span>skills</span> you need to <br/>succeed in    any career.
            </Text>
              <Word>we have over hundred of <span>skills</span>. </Word>
             <Link to="/dashboard" style={{textDecoration:"none"}}>
             <ButtonProps
                height="45px"
                width="150px"
                bg="#47CF73"
                color="white"
                title="Register Skill"
              />
             </Link>
</TextHolder>
        </Main>
      </Container>
    </div>
  );
};

export default HeroPage;

const Word = styled.div`
font-size: 30px;
font-weight: bold;
text-align: center;
margin-top: 10px;
margin-bottom: 10px;
span{
    color: #47CF73;
}
`
const Text = styled.div`
font-size: 60px;
font-weight: bold;
text-align: center;
line-height: 1.1;
span{
    color: #47CF73;
}
`
const TextHolder = styled.div`
display: flex;
justify-content: center;
align-items: center;
  flex-direction: column;
`
const Main = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0,0,0,0.4);
color: white;
`;
const Container = styled.div`
background-image:url(${homePage});
background-repeat: no-repeat;
background-position: center;
background-attachment: fixed;
background-size: cover;
height: 700px;
`;
