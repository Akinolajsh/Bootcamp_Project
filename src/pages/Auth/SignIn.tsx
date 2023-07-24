import React from "react";
import styled from "styled-components";
import { FiMail, FiKey } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { signInUser } from "../../utils/API";
import logo from "../../assets/skilled.png";
import { useDispatch } from "react-redux";
import { signUserGlobal } from "../../global/AuthGlobal";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (res: any) => {
        signInUser(res).then((res: any) => {
                  console.log("show: ", res)
                  dispatch(signUserGlobal(res))
                navigate("/home")
            })
      
  });

  return (
    <div>
      <Container>
        <Main onSubmit={onSubmit}>
          <Top>
            <Wrap>
              <Image src={logo} />
            </Wrap>
          </Top>
          <Bottom>
            <Wrapper>
              <TextHolder>Email:</TextHolder>
              <Cover>
                <InputHolder>
                  <Input
                    placeholder="Enter your Email"
                    {...register("email")}
                  />
                  <Icon />
                </InputHolder>
                {errors.email && <Error>Email Error</Error>}
              </Cover>
            </Wrapper>
            <Wrapper>
              <TextHolder>Password:</TextHolder>
              <Cover>
                <InputHolder>
                  <Input
                    placeholder="Enter your Password"
                    {...register("password")}
                  />
                  <Icon1 />
                </InputHolder>
                {errors.password && <Error>Require Password</Error>}
              </Cover>
            </Wrapper>
       
          
          <Button type="submit">Login</Button>
          
          </Bottom>
        </Main>
      </Container>
    </div>
  );
};

export default SignIn;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
const Button = styled.button`
  width: 100%;
  height: 40px;
  color: white;
  background-color: #47cf73;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  margin-left: 5px;
  margin-top: 20px;

  cursor: pointer;
  text-decoration: none;
`;

const Icon1 = styled(FiKey)`
  margin-right: 5px;
  color: #aca4a4;
  font-size: 20px;
`;
const Icon = styled(FiMail)`
  font-size: 20px;
  margin-right: 5px;
  color: #aca4a4;
`;

const Input = styled.input`
  flex: 1;
  outline: none;
  border: none;
`;

const Error = styled.div`
  font-size: 10px;
  justify-content: flex-end;
  display: flex;
  color: red;
`;

const InputHolder = styled.div`
  width: 97%;
  margin: 0 5px;
  height: 50px;
  display: flex;
  align-items: center;
  border: 1px solid silver;
  border-radius: 5px;
`;

const Cover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TextHolder = styled.div`
  font-size: 12px;
  margin: 0 5px;
  /* background-color: red; */
  font-weight: 600;
  width: 100px;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 5px 10px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;

const Bottom = styled.div`
  width: 98%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

const Top = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Main = styled.form`
  min-height: 400px;
  width: 350px;
  margin-right: 30px;
  border-radius: 5px;
  box-shadow: 2px 10px 96px 0px rgba(133, 118, 118, 0.75);
  -webkit-box-shadow: 2px 10px 96px 0px rgba(133, 118, 118, 0.75);
  -moz-box-shadow: 2px 10px 96px 0px rgba(133, 118, 118, 0.75);
  background-color: white;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #47cf73;
`;
