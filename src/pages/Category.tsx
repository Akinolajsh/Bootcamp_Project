import React from "react";
import shoe from "../assets/shoeImg.jpg";
import styled from "styled-components";
import CardPhoto from "../components/static/CardPhoto";

const Category = () => {
  return (
    <div>
      <Container>
        <Main>
             <CardPhoto image={shoe} title="Shoe Surgeon" text="Shoemaking is the process of making shoes by hand or machine. It is a centuries-old craft that has been passed down from generation to generation. Shoemakers use a variety of tools and materials to create shoes that are both functional and stylish."/>
            <CardPhoto image={shoe} title="Shoe Surgeon" text="Shoemaking is the process of making shoes by hand or machine. It is a centuries-old craft that has been passed down from generation to generation. Shoemakers use a variety of tools and materials to create shoes that are both functional and stylish."/>
            <CardPhoto image={shoe} title="Shoe Surgeon" text="Shoemaking is the process of making shoes by hand or machine. It is a centuries-old craft that has been passed down from generation to generation. Shoemakers use a variety of tools and materials to create shoes that are both functional and stylish."/>
            <CardPhoto image={shoe} title="Shoe Surgeon" text="Shoemaking is the process of making shoes by hand or machine. It is a centuries-old craft that has been passed down from generation to generation. Shoemakers use a variety of tools and materials to create shoes that are both functional and stylish."/>
            <CardPhoto image={shoe} title="Shoe Surgeon" text="Shoemaking is the process of making shoes by hand or machine. It is a centuries-old craft that has been passed down from generation to generation. Shoemakers use a variety of tools and materials to create shoes that are both functional and stylish."/>
            <CardPhoto image={shoe} title="Shoe Surgeon" text="Shoemaking is the process of making shoes by hand or machine. It is a centuries-old craft that has been passed down from generation to generation. Shoemakers use a variety of tools and materials to create shoes that are both functional and stylish."/>  
        </Main>
      </Container>
    </div>
  );
};

export default Category;


const Main= styled.div`
width: 98%;
height: 100%;
display: flex;
align-items: center; 
justify-content: space-between;
background-color: white;
flex-wrap: wrap;
`
const Container= styled.div`
height: 1000px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: blue;
`