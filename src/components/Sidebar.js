import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import Input from "./Input";

const Sidebar = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="logo" />
        <h3>BIRD COMPANY</h3>
      </LogoWrapper>
      <Form>
        <h3>Sign Up</h3>
        <Input placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm password" />
        <button>Sign Up</button>
      </Form>
      <div>
        <Terms>
          By signing up, I agree to the Privacy Policy <br /> and Terms of Service
        </Terms>
        <h4>Already have an account? <span>Sign In</span></h4>
      </div>
    </Container>
  );
};

const Terms = styled.div`
  padding: 0 1rem;
  text-align: center;
  font-size: 15px;
  color: #808080;
  font-weight: 300;
`;



const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }

  button {
    width: 85%;
    max-width: 350px;
    min-width: 250px;
    height: 50px;
    border: none;
    margin: 1.5rem 0;
    border-radius: 10px;
    background-color: #70edb9;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-5px);
    }
  }
`;

const LogoWrapper = styled.div`
  img {
    height: 8rem;
  }

  h3 {
    text-align: center;
    font-size: 20px;
    color: rgb(66, 66, 66);
  }
`;

const Container = styled.div`
  min-width: 500px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 5rem;

  span {
    color:#ff8d8d;
  }

  h4 {
    color: #808080;
    padding-top: 2rem;
    text-align: center;
    font-size: 22px;
  }

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }
`;

export default Sidebar;
