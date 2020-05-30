import React from 'react';
import PropTypes from 'prop-types';
import { Container, Img, Image } from './styles';
import Save from '../Save';
import GoTo from '../GoTo';
import LazyLoad from 'react-lazy-load';

function Card(props) {
    return (
        <Container>
            <Image>
                <Save />
                <GoTo />
                <LazyLoad>
                    <Img
                        src={props.src}
                        alt={props.title}
                        title={props.title}
                    />
                </LazyLoad>
            </Image>
        </Container>
    );
}
Card.propTypes = {
    title: PropTypes.string,
    src: PropTypes.string,
};

export default Card;
