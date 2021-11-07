import React from "react";
import styled from "styled-components";

const Input = ({ type, placeholder }) => {
  return (
    <Container>
      <StyledInput type="text" />
      <div />
    </Container>
  );
};

const StyledInput = styled.input`
  width: 80%;
  max-width: 350px;
  min-width: 250px;
  height: 40px;
  margin: 0.5rem 0;
  background-color: #f3f3f3;
  border: none;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 0 1rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Input;
