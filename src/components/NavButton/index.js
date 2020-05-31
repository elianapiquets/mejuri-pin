import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

function NavButton(props) {
    return (
        <Container exact={props.exact} to={props.to}  activeClassName="selected">
            {props.children}
        </Container>
    );
}
NavButton.propTypes = {
    children: PropTypes.string.isRequired,
    activeClassName: PropTypes.string,
    to: PropTypes.string,
};

export default NavButton;
