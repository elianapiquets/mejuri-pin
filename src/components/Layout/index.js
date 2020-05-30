import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

function Layout(props) {
    return <Container>{props.children}</Container>;
}
Layout.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Layout;
