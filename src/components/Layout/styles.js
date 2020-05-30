import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    padding: 0 60px;
    margin-top: 80px;

    ${props => props.theme.mediaDown.sm`
    padding: 0 30px;
     `} ${props => props.theme.mediaDown.xs`
    padding: 0 15px;
     `};
`;
