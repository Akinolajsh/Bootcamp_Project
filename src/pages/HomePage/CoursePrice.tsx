import React from "react";
import styled from "styled-components";
import PriceProps from "../../components/static/PriceProps";
import welder from "../../assets/welder.jpg";

const CoursePrice = () => {
  return (
    <div>
      <Container>
        <Main>
          <PriceProps
            name="Jane Albert"
            text="a start guide: product marketing using g suite"
            price="₦ 30,000"
            img={welder}
          />
          <PriceProps
            name="Jane Albert"
            text="a start guide: product marketing using g suite"
            price="₦ 30,000"
            img={welder}
          />
          <PriceProps
            name="Jane Albert"
            text="a start guide: product marketing using g suite"
            price="₦ 30,000"
            img={welder}
          />
          <PriceProps
            name="Jane Albert"
            text="a start guide: product marketing using g suite"
            price="₦ 30,000"
            img={welder}
          />
          <PriceProps
            name="Jane Albert"
            text="a start guide: product marketing using g suite"
            price="₦ 30,000"
            img={welder}
          />
          <PriceProps
            name="Jane Albert"
            text="a start guide: product marketing using g suite"
            price="₦ 30,000"
            img={welder}
          />
          <PriceProps
            name="Jane Albert"
            text="a start guide: product marketing using g suite"
            price="₦ 30,000"
            img={welder}
          />
          <PriceProps
            name="Jane Albert"
            text="a start guide: product marketing using g suite"
            price="₦ 30,000"
            img={welder}
          />
        </Main>
      </Container>
    </div>
  );
};

export default CoursePrice;

const Main = styled.div`
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-wrap: wrap; */
  /* overflow: hidden; */
`;

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
