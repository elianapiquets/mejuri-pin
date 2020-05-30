import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    display: inline-block;
    border-radius: 45px;
    margin: 0 5px;
    border: 4px solid transparent;
    padding: 3px 10px;
    color: ${props => props.theme.color.gray6};
    text-decoration: none;

    &:hover {
        border: 4px solid ${props => props.theme.color.primary};
    }

    ${props =>
        props.selected &&
        css`
            background: ${props.theme.color.gray1};
        `} button {
        padding: 7px 15px;
        outline: none;
        border: none;
        background: none;
        box-shadow: none;
        font-size: 15px;
        color: ${props => props.theme.color.gray4};
        font-weight: 700;
        cursor: pointer;
    }
`;
