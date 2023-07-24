import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/skilled.png"
import ButtonProps from "../../global/ButtonProps";
import {AiOutlineMenu} from "react-icons/ai"
import { Link } from "react-router-dom";

const Header = () => {


  const [show, setShow] = useState<boolean>(false);

  const onShow = () => {
    if (window.scrollY >= 70) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  window.addEventListener("scroll",onShow);

  return (
    <div>
      {show ? (
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
          <Menu/>
        </Main>
      </Container>
      ): (
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
                <Link to="/register" style={{textDecoration:"none"}}>
                <ButtonProps height="45px" width="100px" bg="#47CF73" color="black" title="Get Started"/>
                </Link>
                <ButtonProps height="45px" width="80px" bg="#444857" color="white" title="Login"/>
            </ButtonHolder>
          </Wrap>
          <Menu/>
        </Main>
      </Container>
      )}
    </div>
  );
};

export default Header;


const Menu = styled(AiOutlineMenu)`
 display: none;

@media screen and (min-width: 320px) {
display: block;
font-size: 50px;
}
@media screen and (min-width: 1024px) {
display: none;
font-size: 50px;
}
@media screen and (min-width: 724px) {
display: none;
font-size: 50px;
}
`

const ButtonHolder = styled.div`
display: flex;
justify-content: space-between;
gap: 10px;

@media screen and (max-width: 768px) {
display: none
}
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

@media screen and (max-width: 768px) {
display: none;
}
`;

const Logo = styled.img`
object-fit: contain;
`;

const Main = styled.div`
height: 100%;
width: 95%;
display: flex;
justify-content: space-between;
align-items: center;

@media screen and (max-width: 324px) {

}

`;

const Container = styled.div`
height: 70px;
width: 100%;
background-color: #252222;
display: flex;
justify-content: center;
align-items: center;
color:white;
  position: fixed;
  z-index: 99;
`;
