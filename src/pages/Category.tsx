import React from "react";
import shoe from "../assets/shoeImg.jpg";
import styled from "styled-components";
import photo from "../assets/photo1.jpg";
import mechanic from "../assets/mechanic.webp";
import barber from "../assets/barber.jpg";
import hairdresser from "../assets/hairdresser.jpg";
import plum from "../assets/plumber.webp";
import CardPhoto from "../components/static/CardPhoto";
import ButtonProps from "../global/ButtonProps";

const Category = () => {
  return (
    <div>
      <Container>
        <TextHolder>
          <Text>Top Skills</Text>
          <SubText>Find Skill and Specializations from top Teachers</SubText>
          <ButtonProps height="45px" width="100px" bg="#47CF73" color="black" title="Explore"/>
        </TextHolder>

        <Main>
          <CardPhoto
            image={shoe}
            title="Shoe Surgeon"
            text="Shoemaking is the process of making shoes by hand or machine. It is a centuries-old craft that has been passed down from generation to generation. Shoemakers use a variety of tools and materials to create shoes that are both functional and stylish."
          />
          <CardPhoto
            image={photo}
            title="Picture Perfect Studio"
            text="Photography is the art of capturing images with a camera. It is a versatile art form that can be used to capture a wide range of subjects, from landscapes to portraits to abstract images."
          />
          <CardPhoto
            image={mechanic}
            title=" Car Care Center"
            text="A mechanic is a skilled tradesperson who repairs and maintains motor vehicles. Mechanics typically work in garages, where they use a variety of tools and equipment to diagnose and fix problems with cars, trucks, and other vehicles."
          />
          <CardPhoto
            image={plum}
            title="Plumbing Solutions"
            text="Plumbing is the trade of working with pipes, plumbing fixtures, drains, and sewage systems. Plumbers install, repair, and maintain these systems in homes, businesses, and other buildings."
          />
          <CardPhoto
            image={barber}
            title="Style Lab"
            text="Barbering is the art of cutting, styling, and grooming hair. Barbers typically work in barbershops, where they provide a variety of services, such as haircuts, shaves, beard trims, and hair coloring."
          />
          <CardPhoto
            image={hairdresser}
            title="Hair Studio"
            text="Hairdressing is the art of cutting, styling, and coloring hair. Hairdressers typically work in salons, where they provide a variety of services, such as haircuts, hair coloring, and styling. 
"
          />
        </Main>
      </Container>
    </div>
  );
};

export default Category;

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
  width: 98%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  flex-wrap: wrap;
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
