import React from 'react';
import PropTypes from 'prop-types';
import { Container, List } from './styles';

function Nav(props) {
    return (
        <Container>
            <List>{props.children}</List>
        </Container>
    );
}
Nav.propTypes = {
    children: PropTypes.array.isRequired,
};

export default Nav;
