import React from "react";
import styled from "styled-components";

const Input = ({ type, placeholder }) => {
  return (
    <Container>
      <StyledInput
        placeholder={placeholder}
        type={type ? type : "text"}
        required
        autocomplete="on"
      />
      <Status />
    </Container>
  );
};

const StyledInput = styled.input`
  width: 80%;
  max-width: 350px;
  min-width: 300px;
  height: 50px;
  margin: 0.5rem 0;
  background-color: #f3f3f3;
  border: none;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 0 1rem;
  transition: all 0.2s ease-in;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Status = styled.div`
  height: 10px;
  width: 10px;
  background: #9d9d9d;
  border-radius: 10px;
  margin-left: 1rem;

  ${StyledInput}:focus + & {
    background: #ffa689;
  }

  ${StyledInput}:invalid + & {
    background: #fe2f75;
  }

  ${StyledInput}:valid + & {
    background: #70EDB9;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Input;
