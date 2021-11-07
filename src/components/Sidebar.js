import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const Sidebar = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="logo" />
        <h3>BIRD COMPANY</h3>
      </LogoWrapper>
    </Container>
  );
};

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
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;

`;

export default Sidebar;
