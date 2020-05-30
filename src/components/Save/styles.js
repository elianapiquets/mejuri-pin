import styled, {css} from 'styled-components';

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
    outline: none;

    &:hover {
      opacity: 1;
      
    }

    ${props =>
        props.animation &&
        css`
        animation: scaleSave 1s 1;
      span {
        animation: hideElement 1s 1;
      }
      i {
        animation: moveIcon 1s 1;
      }
        `}
  


  @keyframes scaleSave {
    0% {
      transform: scale(1);
    }
    20% {
      transform: scale(1.1);
    }
    80% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes hideElement {
    0% {
      opacity: 1;
    }
    20% {
      opacity: 0;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes moveIcon {
    0% {
      left: 0;
    }
    20% {
      left: 18px;
    }
    80% {
      left: 18px;
    }
    100% {
      left: 0;
    }
  }
`;

export const Icon = styled.i`
    color: ${props => props.theme.color.white};
    display: inline-block;
    margin-right: 5px;
    font-size: 16px;
    position:relative;
`;
