import styled from 'styled-components';

export const Container = styled.button`
    transition: all 0.5s ease-in-out;
    opacity: 0;
    border: none;
    background: ${props => props.theme.color.secondary};
    color: ${props => props.theme.color.white};
    border-radius: 8px;
    padding: 10px 15px;
    position: absolute;
    right: 10px;
    top: 10px;
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
