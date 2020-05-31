import React from "react";
import PropTypes from "prop-types";
import { Container, Img, Image } from "./styles";
import Save from "../Save";
import GoTo from "../GoTo";
import LazyLoad from "react-lazyload";
import Loading from '../Loading'

function Card(props) {
  return (
    <Container>
       <LazyLoad height={200} offset={[-200, 0]} placeholder={<Loading />} debounce={500}>
        <Image>
          <Save
            src={props.src}
            alt={props.title}
            title={props.title}
            id={props.id}
          />
          <GoTo />
          <Img src={props.src} alt={props.title} title={props.title} />
        </Image>
      </LazyLoad>
    </Container>
  );
}
Card.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
};

export default Card;
