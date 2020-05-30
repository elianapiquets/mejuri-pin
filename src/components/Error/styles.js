import styled from 'styled-components';

export const Container = styled.div`
    color: ${props => props.theme.color.gray6};
    margin: 160px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled.i`
    color: ${props => props.theme.color.gray6};
    display: inline-block;
    margin-right: 15px;
    font-size: 50px;
    display: block;
    line-height: 0;
`;
