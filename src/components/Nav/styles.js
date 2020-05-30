import styled from 'styled-components';

export const Container = styled.nav`
    display: block;
    position: fixed;
    top: 0;
    width: 100%;
    background: #fff;
    z-index: 200;
`;

export const List = styled.ul`
    list-style: none;
    margin: 10px auto;
    padding: 0;
    text-align: center;
    overflow: auto;
    overflow-y: hidden;
    white-space: nowrap;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
        width: 0 !important;
    }
`;
