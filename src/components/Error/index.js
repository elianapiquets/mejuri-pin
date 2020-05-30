import React from "react";
import { Container, Icon } from "./styles";
import { FaDizzy } from "react-icons/fa";

function Error() {
  return (
    <Container>
      <Icon>
        <FaDizzy />
      </Icon>
      <span>Algo salio mal intentalo nuevamente</span>
    </Container>
  );
}

export default Error;
