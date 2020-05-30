import React from "react";
import { Container, Icon } from "./styles";
import { FaArrowUp } from "react-icons/fa";

function GoTo(props) {
  return (
    <Container href="https://mejuri.com/" target="_blank" alt="Go to Mejuri">
      <Icon>
        <FaArrowUp />
      </Icon>
      <span>mejuri</span>
    </Container>
  );
}

export default GoTo;
