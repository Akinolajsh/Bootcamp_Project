import React from 'react'
import styled from 'styled-components';
import Reaction from '../components/static/Reaction';
import img from "../assets/testify.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"  
import ButtonProps from '../global/ButtonProps';

const Testimony = () => {

const settings = {
  infinite: true,
  speed: 10000,
  autoplaySpeed: 500,
  slidesToShow: 4,
  slidesToScroll:1,
  autoplay: true,
  cssEase: "linear",
  responsive: [
    {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
  ]
};

  return (
    <div>
        <Container>
        <TextHolder>
          <Text>Top Skills</Text>
          <SubText>Find Skill and Specializations from top Teachers</SubText>
          <ButtonProps height="45px" width="100px" bg="#47CF73" color="black" title="Explore"/>
        </TextHolder>
<Main>
<Slider {...settings}>
    <Reaction image={img} name='AKIN' text='I would highly recommend [product name] to anyone who is looking for a [describe the problem your product solves]. It has helped me to [describe the results you saw].'/>
    <Reaction image={img} name='AKIN' text='I would highly recommend [product name] to anyone who is looking for a [describe the problem your product solves]. It has helped me to [describe the results you saw].'/>
    <Reaction image={img} name='AKIN' text='I would highly recommend [product name] to anyone who is looking for a [describe the problem your product solves]. It has helped me to [describe the results you saw].'/>
    <Reaction image={img} name='AKIN' text='I would highly recommend [product name] to anyone who is looking for a [describe the problem your product solves]. It has helped me to [describe the results you saw].'/>
    <Reaction image={img} name='AKIN' text='I would highly recommend [product name] to anyone who is looking for a [describe the problem your product solves]. It has helped me to [describe the results you saw].'/>
    <Reaction image={img} name='AKIN' text='I would highly recommend [product name] to anyone who is looking for a [describe the problem your product solves]. It has helped me to [describe the results you saw].'/>
    <Reaction image={img} name='AKIN' text='I would highly recommend [product name] to anyone who is looking for a [describe the problem your product solves]. It has helped me to [describe the results you saw].'/>
    <Reaction image={img} name='AKIN' text='I would highly recommend [product name] to anyone who is looking for a [describe the problem your product solves]. It has helped me to [describe the results you saw].'/>
    <Reaction image={img} name='AKIN' text='I would highly recommend [product name] to anyone who is looking for a [describe the problem your product solves]. It has helped me to [describe the results you saw].'/>
    <Reaction image={img} name='AKIN' text='I would highly recommend [product name] to anyone who is looking for a [describe the problem your product solves]. It has helped me to [describe the results you saw].'/>
    <Reaction image={img} name='AKIN' text='I would highly recommend [product name] to anyone who is looking for a [describe the problem your product solves]. It has helped me to [describe the results you saw].'/>
 </Slider>
</Main>
        </Container>
    </div>
  )
}

export default Testimony



const Text = styled.div`
font-size: 36px;
font-weight: 900;
`;

const SubText = styled.div`
margin-bottom: 10px;
`;
const TextHolder = styled.div`
  width: 90%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Main = styled.div`
width: 100%;
flex-wrap: wrap;
overflow: hidden;
`
const Container = styled.div`
width: 100%;
height: 700px;
display: flex;
flex-direction: column;
justify-content: center;
  background-color: white;
flex-wrap: wrap;
align-items: center;

/* background-color: red; */
`