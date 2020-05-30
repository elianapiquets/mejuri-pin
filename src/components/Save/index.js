import React from 'react';
import PropTypes from 'prop-types';
import { Container, Icon } from './styles';
import { FaThumbtack } from 'react-icons/fa';

function Save(props) {
    return (
        <Container>
            <Icon>
                <FaThumbtack />
            </Icon>
            <span>Save</span>
        </Container>
    );
}
Save.propTypes = {};

export default Save;
