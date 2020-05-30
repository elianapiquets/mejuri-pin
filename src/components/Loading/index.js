import React from 'react';
import { Container, Dot } from './styles';

function Loading({ children, loading, ...props }) {
    return (
        <Container>
            <Dot />
        </Container>
    );
}

Loading.defaultProps = {};

export default Loading;
