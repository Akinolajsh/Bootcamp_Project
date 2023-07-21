import React from "react";
import styled from "styled-components";
import logo from "../../assets/skilled.png"
import ButtonProps from "../../global/ButtonProps";


const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo src={logo}/>

          <Wrap>
          <NavHolder>
            <Nav>About</Nav>
            <Nav>Skills</Nav>
            <Nav>Blog</Nav>
            <Nav>Contact Us</Nav>
          </NavHolder>
            <ButtonHolder>
                <ButtonProps height="45px" width="100px" bg="#47CF73" color="black" title="Get Started"/>
                <ButtonProps height="45px" width="80px" bg="#444857" color="white" title="Login"/>
            </ButtonHolder>
          </Wrap>
          {/* <Menu></Menu> */}
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Menu = styled.div`
  width:40px;
  height: 40px;
  border-radius: 10px;
  background-color: grey;

`

const ButtonHolder = styled.div`
display: flex;
justify-content: space-between;
gap: 10px;
`;

const Wrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 600px;
`;
const Nav = styled.div`
font-weight: 700;
`;

const NavHolder = styled.div`
display: flex;
gap: 20px;


`;

const Logo = styled.img`
/* width: 50px;
height: 50px; */
object-fit: contain;
/* background-color: red; */
`;

const Main = styled.div`
height: 100%;
width: 95%;
display: flex;
justify-content: space-between;
align-items: center;

`;

const Container = styled.div`
height: 70px;
width: 100%;
background-color: #252222;
display: flex;
justify-content: center;
align-items: center;
color:white
`;
