import styled from 'styled-components';

export const Container = styled.button`
    transition: all 0.5s ease-in-out;
    opacity: 0;
    border: none;
    background: ${props => props.theme.color.gray6};
    color: ${props => props.theme.color.white};
    border-radius: 17px;
    padding: 7px 10px;
    position: absolute;
    left: 10px;
    bottom: 10px;
    text-decoration: none;
    cursor: pointer;
    z-index: 100;

    &:hover {
        transform: scale(1.05);
        opacity: 1;
    }
`;

export const Icon = styled.i`
    color: ${props => props.theme.color.white};
    display: inline-block;
    margin-right: 5px;
`;
