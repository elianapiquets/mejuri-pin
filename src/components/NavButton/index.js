import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

function NavButton(props) {
    return (
        <Container to={props.to} selected={props.selected}>
            {props.children}
        </Container>
    );
}
NavButton.propTypes = {
    children: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    to: PropTypes.string,
};

export default NavButton;
