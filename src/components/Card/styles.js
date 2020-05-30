import styled from 'styled-components';

export const Container = styled.div`
    display: inline-block;
    vertical-align: top;
   
    cursor: pointer;
    width: calc(100% / 7);

    ${props => props.theme.mediaDown.md`
    width: calc(100% / 5);
    `}


    ${props => props.theme.mediaDown.sm`
    width: calc(100% / 3);
    `}

    ${props => props.theme.mediaDown.xs`
    width: calc(100% / 2);
    `}
  
`;

export const Image = styled.div`
    margin: 10px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;

    ${props => props.theme.mediaDown.xs`
    margin: 10px 5px;
    `} &:before {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        opacity: 0;
        background: rgba(0, 0, 0, 0.5);
        -moz-transition: all 1s;
        -webkit-transition: all 1s;
        transition: all 1s;
        position: absolute;
        z-index: 90;
    }

    &:hover {
        &:before {
            opacity: 1;
        }
        button,
        a {
            opacity: 1;
        }
    }
`;

export const Img = styled.img`
    transition: all 0.5s ease-in-out;
    backface-visibility: hidden;
    max-width: 100%;
    min-height: 100%;
    padding: 0;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: block;
`;
