import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 2rem 0;
    margin: 0 -5%;
    overflow: hidden;
`;

export const Dot = styled.div`
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${props => props.theme.color.secondary};
    color: ${props => props.theme.color.primary};
    animation: dot-flashing 1s infinite linear alternate;
    animation-delay: 0.5s;

    &::before,
    &::after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0;
    }

    &::before {
        left: -15px;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: ${props => props.theme.color.secondary};
        color: ${props => props.theme.color.primary};
        animation: dot-flashing 1s infinite alternate;
        animation-delay: 0s;
    }

    &::after {
        left: 15px;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: ${props => props.theme.color.secondary};
        color: ${props => props.theme.color.primary};
        animation: dot-flashing 1s infinite alternate;
        animation-delay: 1s;
    }

    @keyframes dot-flashing {
        0% {
            background-color: ${props => props.theme.color.secondary};
        }
        50%,
        100% {
            background-color: ${props => props.theme.color.gray1};
        }
    }
`;
