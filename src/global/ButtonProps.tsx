import React from "react";
import styled from "styled-components";
import { iBtn } from "../utils/interface";



const ButtonProps: React.FC<iBtn> = ({ height, width, title, bg, color }) => {
  return (
    <div>
      <Container height={`${height}`} width={`${width}`} color={`${color}`} bg={`${bg}`} >{title}</Container>
    </div>
  );
};

export default ButtonProps;

const Container = styled.div<{
  height: string;
  width: string;
  color: string;
  bg: string;
}>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  color: ${({ color }) => color};
  background-color: ${({ bg }) => bg};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;

  :hover{
  transition: all 350 ms;
transform: scale(1.1);
  }
`;
